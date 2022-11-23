import pandas as pd
import numpy as np
import math
from numpy.linalg import norm
from sklearn.preprocessing import OneHotEncoder
from sklearn import preprocessing

import warnings
warnings.filterwarnings("ignore")
## Calling the dataframe
data = pd.read_excel("Recommender_Dataset (1).xlsx")

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

bud_value = data['Budget'].values
bucket_bud = []
for num in bud_value:
  bucket_bud.append(budget(num))

data['Budget_Bucket'] = bucket_bud

cols = list(data.columns.values)
cat_cols = ["University","Course Name","City","Interest","Job domain"]
num_cols = ["CAO opening rank","CAO closing rank"]
data1 = data.copy()

le_c = preprocessing.LabelEncoder()
le_i = preprocessing.LabelEncoder()
le_jd = preprocessing.LabelEncoder()
le_bd = preprocessing.LabelEncoder()

data1['Budget_Bucket'] = data1['Budget_Bucket'].astype('str')
data1["City"] = le_c.fit_transform(data1["City"])
for elem in data1['City'].unique():
    data1['City'+str(elem)] = data1['City'] == elem

data1["Interest"] = le_i.fit_transform(data1["Interest"])
for elem in data1['Interest'].unique():
    data1['Interest'+str(elem)] = data1['Interest'] == elem

data1["Job domain"] = le_jd.fit_transform(data1["Job domain"])
for elem in data1['Job domain'].unique():
    data1['Job domain'+str(elem)] = data1['Job domain'] == elem

#data1["Budget_Bucket"] = data1["Budget_Bucket"])
for elem in data1['Budget_Bucket'].unique():
    data1['budget'+str(elem)] = data1['Budget_Bucket'] == elem

for num in num_cols:
  data1[num] = data1[num].astype('int')

rank_nor = []
maxi = 625.0
mini = 0.0
for num in data1['CAO opening rank'].values:
  rank_nor.append(float((num - mini)/(maxi - mini)))

data1['CAO opening rank'] = rank_nor

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

        
        data_input = pd.DataFrame()
        cao_points = 500 #request.args.get('reading_and_writing_skills')#input("Enter the CAO Points: [Note: Max 625 and min 0 is acceptable] - ")
        city_name = request.form["city_name"]
        field_interest = request.form["field_interest"]
        hobbies = request.form["hobbies"]
        spending_limit = 5000 #request.args.get["reading_and_writing_skills"]#input("Enter the budget: ")

        data_sim = data1.copy()

        data_input['CAO opening rank'] = [float((int(cao_points)-mini)/(maxi-mini))]
        data_input['Budget_Bucket'] = [budget(int(spending_limit))]
        data_input['City'] = [city_name]
        data_input['Interest'] = [hobbies]
        data_input['Job domain'] = [field_interest]

        data_input['City'] = le_c.transform(data_input['City'])
        for elem in data1['City'].unique():
            data_input['City'+str(elem)] = data_input['City'] == elem
        data_input['Interest'] = le_i.transform(data_input['Interest'])
        for elem in data1['Interest'].unique():
            data_input['Interest'+str(elem)] = data_input['Interest'] == elem
        data_input['Job domain'] = le_jd.transform(data_input['Job domain'])
        for elem in data1['Job domain'].unique():
            data_input['Job domain'+str(elem)] = data_input['Job domain'] == elem

        data_input['Budget_Bucket'] = data_input['Budget_Bucket'].astype('str')
        for elem in data1['Budget_Bucket'].unique():
            data_input['budget'+str(elem)] = data_input['Budget_Bucket'] == elem

    for num in ['University',  'Course Name', 'CAO closing rank', 'Budget', 'City', 'Interest', 'Job domain', 'Budget_Bucket']:
        data_sim.pop(num)
        try:
            data_input.pop(num)
        except:
                 continue

           


    pairwise_similarities=np.dot(data_sim.values,data_input.T)/(norm(data_sim.values)*norm(data_input.values))

    data["similarities"] = pairwise_similarities
    data_final = data[['University', 'Course Name', 'Budget', 'similarities']]
    final_df = data_final.sort_values(by=['similarities'], ascending=False)


    print("Course Name  : ", np.asscalar(final_df.head(1)["Course Name"].values))

    output=(np.asscalar(final_df.head(1)["Course Name"].values), np.asscalar(final_df.head(2).tail(1)["Course Name"].values), np.asscalar(final_df.head(3).tail(1)["Course Name"].values), np.asscalar(final_df.head(4).tail(1)["Course Name"].values), np.asscalar(final_df.head(5).tail(1)["Course Name"].values))
        
    


    return render_template('home.html',prediction_text="The Course for you is. {}".format(output))
    

    return render_template("home.html")



if __name__ == "__main__":
     app.run(debug=True,use_reloader=False)
