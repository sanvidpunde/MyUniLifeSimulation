import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix,accuracy_score
from sklearn import preprocessing
from numpy.linalg import norm
import warnings
warnings.filterwarnings("ignore")

import pickle
from flask import Flask, request
from flask_cors import cross_origin

app = Flask(__name__)

# Interest Profiler
@app.route("/predict_interest", methods = ["GET", "POST"])
@cross_origin()
def predictInterest():
    if request.method == "POST":    
      
        # Receive inputs from Post req
        content = request.json
        # print(content)

        model = pickle.load(open("predictInterestProfiler.pkl", "rb"))

        prediction=model.predict([[
            content["Logical_quotient_rating"],
            content["i_get_stressed_out_easily"],
            content["coding_skills_rating"], 
            content["public_speaking_points"],
            content["i_am_always_prepared"],
            content["i_follow_a_schedule"], 
            content["i_am_quick_to_understand_things"],
            content["i_am_full_of_ideas"],
            content["i_start_conversations"], 
            content["do_you_like_sports"],
            content["entrepreneurial_mindset"], 
            content["tendency_to_worry"],
            content["self_learning_capability"], 
            content["Extra_courses_did"],
            content["Taken_inputs_from_seniors_or_elders"],
            content["reading_and_writing_skills"],
            content["memory_capability_score"], 
            content["worked_in_teams_ever"],
            content["Introvert"],
            content["interested_career_area_code"],
            content["Type_of_company_want_to_settle_in_code"],
            content["Interested_Type_of_Books_code"], 
            content["A_Non Technical"],
            content["A_Technical"], 
            content["B_hard_worker"], 
            content["B_smart_worker"]
        ]])

        # print("===========================")
        # print(prediction)
        # print(prediction[0])
        # print("===========================")
            
        return prediction[0]

@app.route("/predict_course", methods = ["GET", "POST"])
@cross_origin()
def predictCourse():

    if request.method == "POST":

        #   Receive inputs from Post req
        # print('made inside post req predictCourse')
        content = request.json
        # print(content)

        course_recommender_model = pickle.load(open("course_recommender_model.pkl", "rb"))

        City = content["City"]
        if (City == 'Dublin'):
            City_code = 4
        elif (City == 'Carlow'):
            City_code = 1
        elif (City == 'Letterkenny'):
            City_code = 8 
        elif (City == 'Limerick'):
            City_code = 9
        elif (City == 'Athlone'):
            City_code = 0
        elif (City == 'Dundalk'):
            City_code = 5
        elif (City == 'Cork'):
            City_code = 2
        elif (City == 'Mayo'):
            City_code = 10
        elif (City == 'Donegal'):
            City_code = 3
        elif (City == 'Waterford'):
            City_code = 13
        elif (City == 'Wexford'):
            City_code = 14
        elif (City == 'Tipperary'):
            City_code = 12
        elif (City == 'Sligo'):
            City_code = 11
        elif (City == 'Galway'):
            City_code = 6
        else:
            City_code = 0

            
        Interest = content["Interest"]
        if (Interest == 'Cricket'):
            Interest_code = 4
        elif (Interest == 'Football'):
            Interest_code = 1
        elif (Interest == 'Singing'):
            Interest_code = 8 
        elif (Interest == 'Chess'):
            Interest_code = 9
        elif (Interest == 'Athletics'):
            Interest_code = 0
        elif (Interest == 'Automation'):
            Interest_code = 5
        else:
            Interest_code = 0

        Job_domain = content["Job_domain"]
        if (Job_domain == 'IT'):
            Job_domain_code = 2
        elif (Job_domain == 'HR'):
            Job_domain_code = 1
        elif (Job_domain == 'Management'):
            Job_domain_code = 4 
        elif (Job_domain == 'Support'):
            Job_domain_code = 5
        elif (Interest == 'Finance'):
            Job_domain_code = 0
        elif (Job_domain == 'Law'):
            Job_domain_code = 3
        else:
            Job_domain_code = 0

        Budget = content["Budget"]
        if (int(Budget) == "2000 - 4000"):
            Budget = 0
        elif (int(Budget) == "4001 - 6000"):
            Budget = 1
        elif (int(Budget) == "6001 - 8000"):
            Budget = 2
        elif (int(Budget) == "8001 - above"):
            Budget = 3
        else:
            Budget = 2

        CAO_Score = content["CAO_Score"]
        if (int(CAO_Score) <=250):
            CAO_Score = 1        
        elif (int(CAO_Score)  >250 and int(CAO_Score)  <450):
            CAO_Score = 2
        elif (int(CAO_Score)  >=450):
            CAO_Score = 3 
        else:
            CAO_Score = 2
            
        prediction = course_recommender_model.predict([[
            CAO_Score,
            Budget,
            City_code,
            Interest_code,
            Job_domain_code
        ]])

        # print("===========================")
        # print(prediction)
        # print(prediction[0])
        # print("===========================")
  
        return prediction[0]

if __name__ == "__main__":
    app.run(debug=True)