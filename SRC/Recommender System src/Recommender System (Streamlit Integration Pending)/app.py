import pandas as pd
import numpy as np
import math
from numpy.linalg import norm
from sklearn.preprocessing import OneHotEncoder
from sklearn import preprocessing

import warnings
warnings.filterwarnings("ignore")

## Calling the dataframe
data = pd.read_csv("final_recommender_dataset.csv")

data.rename(columns = {'fees':'Budget'}, inplace = True)

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
cat_cols = ['college',
 'course',
 'code',
 'location',
 'interest',
 'job_domain',
 'personality']#["University","Course Name","City","Interest","Job domain"]
num_cols = ["cao_score"]#["CAO opening rank","CAO closing rank"]
data1 = data.copy()

le_l = preprocessing.LabelEncoder()
le_i = preprocessing.LabelEncoder()
le_jd = preprocessing.LabelEncoder()
le_bd = preprocessing.LabelEncoder()
le_p = preprocessing.LabelEncoder()

data1['Budget_Bucket'] = data1['Budget_Bucket'].astype('str')

data1["location"] = le_l.fit_transform(data1["location"])
for elem in data1['location'].unique():
    data1['location'+str(elem)] = data1['location'] == elem

data1["interest"] = le_i.fit_transform(data1["interest"])
for elem in data1['interest'].unique():
    data1['interest'+str(elem)] = data1['interest'] == elem

data1["job_domain"] = le_jd.fit_transform(data1["job_domain"])
for elem in data1['job_domain'].unique():
    data1['job_domain'+str(elem)] = data1['job_domain'] == elem

data1['personality'] = le_p.fit_transform(data1["personality"])
for elem in data1['personality'].unique():
    data1['personality'+str(elem)] = data1['personality'] == elem

#data1["Budget_Bucket"] = data1["Budget_Bucket"])
for elem in data1['Budget_Bucket'].unique():
    data1['budget'+str(elem)] = data1['Budget_Bucket'] == elem

for num in num_cols:
  data1[num] = data1[num].astype('int')

rank_nor = []
maxi = 625.0
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

        
          

        data_input = pd.DataFrame()
        cao_score = 500 #request.args.get('reading_and_writing_skills')#input("Enter the CAO Points: [Note: Max 625 and min 0 is acceptable] - ")
        location = request.form["location"]
        interest = request.form["interest"]
        job_domain=  request.form["job_domain"]
        personality= request.form["personality"]
        spending_limit = 5000 #request.args.get["reading_and_writing_skills"]#input("Enter the budget: ")

        data_sim = data1.copy()
        data_input['cao_score'] = [float((int(cao_score)-mini)/(maxi-mini))]
        data_input['Budget_Bucket'] = [budget(int(spending_limit))]
        data_input['location'] = [location]
        data_input['interest'] = [interest]
        data_input['job_domain'] = [job_domain]
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

        data_input['Budget_Bucket'] = data_input['Budget_Bucket'].astype('str')
        for elem in data1['Budget_Bucket'].unique():
            data_input['budget'+str(elem)] = data_input['Budget_Bucket'] == elem

        for num in ['college',
            'course',
            'code',
            'Budget',
            'location',
            'cao_score',
            'interest',
            'job_domain',
            'personality',
            'Budget_Bucket']:
                    data_sim.pop(num)
                    try:
                        data_input.pop(num)
                    except:
                        continue

   


    pairwise_similarities=np.dot(data_sim.values,data_input.T)/(norm(data_sim.values)*norm(data_input.values))
    data["similarities"] = pairwise_similarities
    data_final = data[['college', 'code', 'Budget', 'similarities']]
    final_df = data_final.sort_values(by=['similarities'], ascending=False)


    print("Course Code  : ", np.asscalar(final_df.head(1)["code"].values))

   

    output=(np.asscalar(final_df.head(1)["code"].values))
        
    print(output)

    return render_template('home.html',prediction_text="The Course for you is. {}".format(output))

    return render_template("home.html")



if __name__ == "__main__":
     app.run(debug=True,use_reloader=False)
