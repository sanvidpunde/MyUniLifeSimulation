from flask import Flask, request
from flask_cors import cross_origin
import pickle

app = Flask(__name__)

interest_profiler_model = pickle.load(open("interest_profiler_model.pkl", "rb"))
course_recommender_model = pickle.load(open("course_recommender_model.pkl", "rb"))

@app.route("/interest_profiler_predict", methods = ["GET", "POST"])
@cross_origin()
def predictInterest():
    
    if request.method == "POST": 
        #   Receive inputs from Post req
        print('made inside post req predictInterest')
        content = request.json
        print(content)

        prediction = interest_profiler_model.predict([[
            content["Logical_quotient_rating"],content["coding_skills_rating"], content["hackathons"], content["public_speaking_points"], content["self_learning_capability"], content["Extra_courses_did"], content["Taken_inputs_from_seniors_or_elders"], content["worked_in_teams_ever"], content["Introvert"], content["reading_and_writing_skills"], content["memory_capability_score"],  content["B_hard_worker"] , content["B_smart_worker"], content["A_Management"], content["A_Technical"], content["Interested_subjects_code"], content["Interested_Type_of_Books_code"], content["certifications_code"], content["workshops_code"], content["Type_of_company_want_to_settle_in_code"], content["interested_career_area_code"]
        ]])

        print("===========================")
        print(prediction)
        print(prediction[0])
        print("===========================")
  
        return prediction[0]



@app.route("/course_recommender_predict", methods = ["GET", "POST"])
@cross_origin()
def predictCourse():

    if request.method == "POST":
        #   Receive inputs from Post req
        print('made inside post req predictCourse')
        content = request.json
        print(content)

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
        if (int(Budget) <2001):
            Budget = 1
        elif (int(Budget) >2000 and int(Budget) <5000):
            Budget = 2
        elif (int(Budget) >4999):
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

        print("===========================")
        print(prediction)
        print(prediction[0])
        print("===========================")
  
        return prediction[0]

if __name__ == "__main__":
    app.run(debug=True)