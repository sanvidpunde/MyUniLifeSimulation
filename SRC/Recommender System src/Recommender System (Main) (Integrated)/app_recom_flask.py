import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.svm import SVC
import pickle
from sklearn.metrics.pairwise import euclidean_distances
from flask import Flask
import secrets
from flask import render_template, request, redirect, flash
from IPython.display import HTML
from sklearn.neighbors import NearestNeighbors
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier 

df = pd.read_excel('Recommender_Dataset.xlsx')

#df


def finalList(df):
    y = df.drop(columns = ['CAO opening rank','CAO closing rank','Budget','City','Interest','Job domain'])
    X = df.drop(columns = ['University', 'Course Name','CAO closing rank','Interest','Job domain'])
    cityle = LabelEncoder()
    X['City']=cityle.fit_transform(X['City']
    intle =  LabelEncoder()
    jdle = LabelEncoder()
    #X['Interest']=intle.fit_transform(X['Interest'])
    
    #X['Job domain']=jdle.fit_transform(X['Job domain'])
    ule = LabelEncoder()
    cle = LabelEncoder()
    y['University'] = ule.fit_transform(y['University'])
    y['Course Name'] = cle.fit_transform(y['Course Name'])
    X['Budget'] = X['Budget'].astype('int')
    
    return X,y,ule,cle,cityle,intle,jdle



def similarCourses(query,X,y,ule,cle,sc,predict):
    
    k=5
    course_ids = []
    course_ids.append(predict)
    university_ids =[]
    
    kNN = NearestNeighbors(n_neighbors=k, algorithm="ball_tree")
    kNN.fit(sc.transform(X.values))
    M = len(y['Course Name'])
    N = len(y['University'])
    
    
    if query.shape[0]==2:
        query = np.array(query[1])
    elif query.shape[0]==1:
        query = np.array(query[0])
    query = query.reshape(1,-1)
    
    neighbour = kNN.kneighbors(query, return_distance=False)
    
    courseMapper = dict(zip(list(range(M)), y["Course Name"]))
    universityMapper = dict(zip(list(range(N)), y["University"]))
    
    for i in range(0,k):
        n = neighbour[0][i]
        course_ids.append(courseMapper[n])
        
        
    print(course_ids)
    return course_ids


X,y,ule,cle,cityle,intle,jdle = finalList(df)
encoders = {'uni':ule,'cou':cle,'city':cityle,'ints':intle,'jobs':jdle}
pickle.dump(encoders,open('encoders.pkl','wb'))



app = Flask(__name__)
@app.route("/", methods=["GET","POST"])
def index():
    df = pd.read_excel('Recommender_Dataset.xlsx')
    #df =  pickle.load(open('data.pkl','rb'))
    secret_key=secrets.token_hex(16)
    app.config["SECRET_KEY"] = secret_key
    
    
    X,y,ule,cle,cityle,intle,jdle = finalList(df)
    
    Y = y['Course Name'].values
    sc = StandardScaler()
    x = sc.fit_transform(X.values)
    
    
    X_train,X_test,y_train,y_test = train_test_split(x,Y,test_size = 0.05,random_state = 42)
    
    
   
    #Start of code for SVM
    
  
    # defining parameter range
    model = SVC() 
    model.fit(X_train,y_train)
    predicts = model.predict(X_test)
    k=0
    for i in range(0,len(y_test)):
        
        if predicts[i] == y_test[i]:
            k+=1
    accu_svm = k/len(predicts)
    #End of Code for SVM
    
    
    #Start of Code for KNN
    model1 = RandomForestClassifier(n_estimators = 100)
    model1.fit(X_train,y_train)
    predicts = model1.predict(X_test)
    
    k=0
    for i in range(0,len(y_test)):
        
        if predicts[i] == y_test[i]:
            k+=1
    accu_knn = k/len(predicts)
    #End of code for KNN
    
    
    #Start of Code for Decision Tree Classifier
    model2 = DecisionTreeClassifier()
    model2.fit(X_train,y_train)
    predicts = model2.predict(X_test)

    k=0
    for i in range(0,len(y_test)):
        
        if predicts[i] == y_test[i]:
            k+=1
    accu_dtree = k/len(predicts)
    #End of Code for Decision Tree Classifier
    
    
    accuracies = {'svm': accu_svm, 'knn':accu_knn, 'dtree':accu_dtree}
    max_accu = max(accuracies,key = accuracies.get)
    print(accuracies)
    if max_accu == 'svm':
        model = model
        model.fit(x,Y)
    elif max_accu == 'knn':
        model = model1
        model.fit(x,Y)
    elif max_accu == 'dtree':
        model = model2
        model.fit(x,Y)
    
    data1 = {'data': df, 'model': model, 'cityle': cityle,'intle':intle,'jdle':jdle,'X':X,'y':y}
    pickle.dump(data1,open('data.pkl','wb'))
    
    data2 =  pickle.load(open('data.pkl','rb'))
    
    model = data2['model']
    cityle = data2['cityle']





###########  Flask code starts from here     

    if(request.method == "POST"):
        
        req = request.form
        
        cao = req["cao"]
        city = req["city"]
        budget = req["budget"]
        jobs = req["jobs"]
        interests = req["interests"]
        
        print([cao,city,budget,jobs,interests])
        #,intle.transform([interests])[0],jdle.transform([jobs])[0]
        query = np.array([cao,int(budget),cityle.transform([city])[0]],dtype = "int").reshape(1,-1)
        
        
            
        predict = model.predict(sc.transform(query))
        
        query1 = sc.transform(X.loc[y['Course Name'].isin(predict)])
        
        
        result = similarCourses(query1,X,y,ule,cle,sc,predict[0])
        
        output = pd.DataFrame(columns = ['University','Course Name','City','Budget'])
                
        universities = y['University'].loc[y['Course Name'].isin(result)]
        courses = y['Course Name'].loc[y['Course Name'].isin(result)]
        budgets = X['Budget'].loc[y['Course Name'].isin(result)]
        cities = X['City'].loc[y['Course Name'].isin(result)]
        
                       
        output['University'] = ule.inverse_transform(np.ravel(universities))
        
        output['Course Name'] = cle.inverse_transform(np.ravel(courses))
        
        output['City'] = cityle.inverse_transform(np.ravel(cities))
        
        output['Budget'] = budgets.values
        
        
        
        html = output.to_html()
        
        
        with open("templates/public/output.html", "w", encoding="utf-8") as file:
            file.writelines('<meta charset="UTF-8">\n')
            file.write(html)
        
        
        return render_template("public/output.html")

    return render_template("public/index.html") 
if __name__ == '__main__': 
         app.run(debug = False, port=6969)