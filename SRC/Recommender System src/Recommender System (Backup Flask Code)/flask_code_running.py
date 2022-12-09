import pandas as pd
import numpy as np
import math
from numpy.linalg import norm
from sklearn.preprocessing import OneHotEncoder
from sklearn import preprocessing

import warnings
warnings.filterwarnings("ignore")

## Calling the dataframe
data = pd.read_excel(r"main_final_recommender_dataset.xlsx")

data.head()

## making the buckets for the Budget
## 1: € 2000- € 4000 2: € 4000 - € 8000 3: € 8000 - € 10000 4: € 10000 - € 20000 Making in the Increasing Order
def budget(num):
  if num>=2000 and num<4000:
    return 1
  elif num>=4000 and num<8000:
    return 2
  elif num>=8000 and num<10000:
    return 3
  else:
    return 4

bud_value = data['fees'].values
bucket_bud = []
for num in bud_value:
  bucket_bud.append(budget(num))

data['fees_Bucket'] = bucket_bud

cols = list(data.columns.values)
cat_cols = ["college","course","code","location","interest","job_domain","personality"]
num_cols = ["cao_score"]
data1 = data.copy()

le_p = preprocessing.LabelEncoder()
le_l = preprocessing.LabelEncoder()
le_i = preprocessing.LabelEncoder()
le_jd = preprocessing.LabelEncoder()
le_bd = preprocessing.LabelEncoder()

data1['fees_Bucket'] = data1['fees_Bucket'].astype('str')

data1["location"] = le_l.fit_transform(data1["location"])
for elem in data1['location'].unique():
    data1['location'+str(elem)] = data1['location'] == elem

data1["interest"] = le_i.fit_transform(data1["interest"])
for elem in data1['interest'].unique():
    data1['interest'+str(elem)] = data1['interest'] == elem

data1["job_domain"] = le_jd.fit_transform(data1["job_domain"])
for elem in data1['job_domain'].unique():
    data1['job_domain'+str(elem)] = data1['job_domain'] == elem

#data1["Budget_Bucket"] = data1["Budget_Bucket"])
for elem in data1['fees_Bucket'].unique():
    data1['fees'+str(elem)] = data1['fees_Bucket'] == elem

data1["personality"] = le_p.fit_transform(data1["personality"])
for elem in data1['personality'].unique():
    data1['personality'+str(elem)] = data1['personality'] == elem

for num in num_cols:
  data1[num] = data1[num].astype('int')

rank_nor = []
maxi = 600.0
mini = 0.0
for num in data1['cao_score'].values:
  rank_nor.append(float((num - mini)/(maxi - mini)))

data1['cao_score'] = rank_nor


from flask import Flask, request, render_template
from flask_cors import cross_origin
import sklearn
import pickle
import pandas as pd

app = Flask(__name__)
@app.route("/")
@cross_origin()
def home():
  return render_template("home.html")

@app.route("/predict", methods = ["GET", "POST"])
@cross_origin()
def predict():
    if request.method == "POST": 
        content = request.json

        data_input = pd.DataFrame()
        cao_points = content["CAO"] #request.form["CAO"] #input("Enter the CAO Points: [Note: Max 600 and min 0 is acceptable] - ")
        city_name = content["location"]#request.form["location"] #input("Enter the City Name from the Drop Down: ")
        field_interest =content["job_domain"] #request.form["job_domain"]#input("Enter the filed of Job interest from the choice: ")
        hobbies = content["interest"] #request.form["interest"]#input("Enter your career interest: ")
        spending_limit =content["Budget"] ##7000# input("Enter the fees: ")
        personality =content["personality"] #request.form["personality"]#input("Enter the kind of person from the drop down: ")


        # cao_points =request.form["CAO"] #input("Enter the CAO Points: [Note: Max 600 and min 0 is acceptable] - ")
        # city_name = request.form["location"] #input("Enter the City Name from the Drop Down: ")
        # field_interest =request.form["job_domain"]#input("Enter the filed of Job interest from the choice: ")
        # hobbies =request.form["interest"]#input("Enter your career interest: ")
        # spending_limit =7000# input("Enter the fees: ")
        # personality =request.form["personality"]#input("Enter the kind of person from the drop down: ")
        
        data_sim = data1.copy()

        data_input['cao_score'] = [float((int(cao_points)-mini)/(maxi-mini))]
        data_input['fees_Bucket'] = [budget(int(spending_limit))]
        data_input['location'] = [city_name]
        data_input['interest'] = [hobbies]
        data_input['job_domain'] = [field_interest]
        data_input['personality'] = [personality]

        data_input['location'] = le_l.transform(data_input['location'])
        for elem in data1['location'].unique():
            data_input['location'+str(elem)] = data_input['location'] == elem
        data_input['interest'] = le_i.transform(data_input['interest'])
        for elem in data1['interest'].unique():
            data_input['interest'+str(elem)] = data_input['interest'] == elem
        data_input['job_domain'] = le_jd.transform(data_input['job_domain'])
        for elem in data1['job_domain'].unique():
            data_input['job_domain'+str(elem)] = data_input['job_domain'] == elem
        data_input["personality"] = le_p.fit_transform(data_input["personality"])
        for elem in data1['personality'].unique():
            data_input['personality'+str(elem)] = data_input['personality'] == elem
        data_input['fees_Bucket'] = data_input['fees_Bucket'].astype('str')
        for elem in data1['fees_Bucket'].unique():
            data_input['fees_budget'+str(elem)] = data_input['fees_Bucket'] == elem

        for num in ['code','college', 'course', 'fees', 'location', 'interest', 'job_domain', 'fees_Bucket']:
                data_sim.pop(num)
                try:
                    data_input.pop(num)
                except:
                    continue


    pairwise_similarities=np.dot(data_sim.values,data_input.T)/(norm(data_sim.values)*norm(data_input.values))
    data["similarities"] = pairwise_similarities
    data_final = data[['college', 'course','code', 'fees', 'similarities']]
    final_df = data_final.sort_values(by=['similarities'], ascending=False)

    print("Course Code  : ", np.asscalar(final_df.head(1)["code"].values))
    print("Course Code  : ", np.asscalar(final_df.head(2).tail(1)["code"].values))
    print("Course Code  : ", np.asscalar(final_df.head(3).tail(1)["code"].values))
    print("Course Code  : ", np.asscalar(final_df.head(4).tail(1)["code"].values))
    print("Course Code  : ", np.asscalar(final_df.head(5).tail(1)["code"].values))
    
    # output= (np.asscalar(final_df.head(1)["code"].values+","+final_df.head(2).tail(1)["code"].values)+
    # ","+final_df.head(3).tail(1)["code"].values+","+final_df.head(4).tail(1)["code"].values+","+final_df.head(5).tail(1)["code"].values)
    output= (np.asscalar(final_df.head(1)["code"].values))
    output2=(np.asscalar(final_df.head(2).tail(1)["code"].values))
    output3=(np.asscalar(final_df.head(3).tail(1)["code"].values))
    output4=(np.asscalar(final_df.head(4).tail(1)["code"].values))
    output5=(np.asscalar(final_df.head(5).tail(1)["code"].values))
    output=(output+","+output2+","+output3+","+output4+","+output5)
       
    return(format(output))
    #return render_template('home.html',prediction_text="The Course for you is. {}".format(output))
    
if __name__ == "__main__":
     app.run(debug=True,use_reloader=False)