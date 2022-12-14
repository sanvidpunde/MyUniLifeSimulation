# -*- coding: utf-8 -*-
"""
This is a FrontEnd code written in Streamlit and Python packages
"""
import pandas as pd
import numpy as np
import json
import requests
import streamlit as st
from PIL import Image
from numpy.linalg import norm
from sklearn import preprocessing

def budget(num):
  if num>=2000 and num<4000:
    return 1
  elif num>=4000 and num<8000:
    return 2
  elif num>=8000 and num<10000:
    return 3
  else:
    return 4

def bud_list(spending):
    if spending == '€ 2000- € 4000':
        return 1
    elif spending == '€ 4000 - € 8000':
        return 2
    elif spending == '€ 8000 - € 10000':
        return 3
    else:
        return 4

def data_read():
    data = pd.read_csv(r"main_final_recommender_dataset.csv")
    
    cities = list(data["location"].value_counts().keys())
    job_interest = list(data["job_domain"].value_counts().keys())
    hobby_interest = list(data["interest"].value_counts().keys())
    personality = list(data["personality"].value_counts().keys())
    
    return data, cities, job_interest, hobby_interest, personality   

def recommend_college(spending_limit,cao_points,city_name,hobbies, field_interest, person_personality):    
    data, cities, job_interest, hobby_interest, personality = data_read()
    bud_value = data['fees'].values
    bucket_bud = []
    for num in bud_value:
      bucket_bud.append(budget(num))
    
    data['fees_Bucket'] = bucket_bud
    
    num_cols = ["cao_score"]
    data1 = data.copy()
    
    le_p = preprocessing.LabelEncoder()
    le_l = preprocessing.LabelEncoder()
    le_i = preprocessing.LabelEncoder()
    le_jd = preprocessing.LabelEncoder()

    
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
    
    data_input = pd.DataFrame()


    data_sim = data1.copy()
    
    data_input['cao_Score'] = [float((int(cao_points)-mini)/(maxi-mini))]
    data_input['fees_Bucket'] = [spending_limit]
    data_input['location'] = [city_name]
    data_input['interest'] = [hobbies]
    data_input['job_domain'] = [field_interest]
    data_input['personality'] = [person_personality]
    
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
    
    for num in ['code','college', 'course', 'fees', 'location', 'personality','interest', 'job_domain', 'fees_Bucket']:
      data_sim.pop(num)
      try:
        data_input.pop(num)
      except:
        continue
    
    
    pairwise_similarities=np.dot(data_sim.values,data_input.T)/(norm(data_sim.values)*norm(data_input.values))   
    
    data["similarities"] = pairwise_similarities
    data_final = data[['college', 'course','code', 'fees', 'similarities']]
    final_df = data_final.sort_values(by=['similarities'], ascending=False)

    return final_df.head().to_dict()
    
    
data_input = pd.DataFrame()

data, cities, job_interest, hobby_interest, personality = data_read()

budget_list =  ['€ 2000- € 4000','€ 4000 - € 8000','€ 8000 - € 10000','€ 10000 - € 20000']

img = Image.open("C:\\Users\\ndasadhikari\\OneDrive - Microsoft\\Documents\\Python Scripts\\Recommender_Logo.png")
# display image using streamlit
# width is used to set the width of an image
st.sidebar.image(img, width=305)

st.title("Colleges Recommender")

cao_points = st.slider("Enter the CAO Points:", 0, 600,1)
city_name = st.sidebar.selectbox("Enter the City Name from the Drop Down: ",cities)
field_interest = st.sidebar.selectbox("Enter the filed of interest from the choice: ", job_interest)
hobbies = st.sidebar.selectbox("Enter your hobby: ", hobby_interest)
spending_limit = st.sidebar.selectbox("Enter the Fees Cap: ", budget_list)
personality = st.sidebar.selectbox("Enter the kind of person from the drop down:", personality)

## converting the inputs to the json formSat
inputs = {"cao_points":cao_points,
          "city_name":city_name,
          "field_interest":field_interest,
          "hobbies":hobbies,
          "spending_limit":spending_limit,
          "personality":personality}

if(st.button('Recommend Colleges')):
    #res = requests.post(url = "http://127.0.0.1:8000/recommend", data=json.dumps(inputs))
    df = recommend_college(spending_limit,cao_points,city_name,hobbies, field_interest, personality)
    
    final_df = pd.DataFrame(df)
    
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("Recommendation 1 ")
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("College Name : ", np.asscalar(final_df.head(1)["college"].values))
    st.write("Course Name  : ", np.asscalar(final_df.head(1)["course"].values))
    st.write("Code         : ", np.asscalar(final_df.head(1)["code"].values))
    st.write("Budget       : ", np.asscalar(final_df.head(1)["fees"].values))
    
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("Recommendation 2 ")
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("College Name : ", np.asscalar(final_df.head(2).tail(1)["college"].values))
    st.write("Course Name  : ", np.asscalar(final_df.head(2).tail(1)["course"].values))
    st.write("Code         : ", np.asscalar(final_df.head(2).tail(1)["code"].values))
    st.write("Budget       : ", np.asscalar(final_df.head(2).tail(1)["fees"].values))
    
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("Recommendation 3 ")
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("College Name : ", np.asscalar(final_df.head(3).tail(1)["college"].values))
    st.write("Course Name  : ", np.asscalar(final_df.head(3).tail(1)["course"].values))
    st.write("Code         : ", np.asscalar(final_df.head(3).tail(1)["code"].values))
    st.write("Budget       : ", np.asscalar(final_df.head(3).tail(1)["fees"].values))
    
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("Recommendation 4 ")
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("College Name : ", np.asscalar(final_df.head(4).tail(1)["college"].values))
    st.write("Course Name  : ", np.asscalar(final_df.head(4).tail(1)["course"].values))
    st.write("Code         : ", np.asscalar(final_df.head(4).tail(1)["code"].values))
    st.write("Budget       : ", np.asscalar(final_df.head(4).tail(1)["fees"].values))
    
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("Recommendation 5 ")
    st.write("--------------------------------------------------------------------------------------------------")
    st.write("College Name : ", np.asscalar(final_df.head(5).tail(1)["college"].values))
    st.write("Course Name  : ", np.asscalar(final_df.head(5).tail(1)["course"].values))
    st.write("Code         : ", np.asscalar(final_df.head(5).tail(1)["code"].values))
    st.write("Budget       : ", np.asscalar(final_df.head(5).tail(1)["fees"].values))
    
    st.write("--------------------------------------------------------------------------------------------------")