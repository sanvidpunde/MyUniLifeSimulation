from flask import Flask, request, jsonify, render_template
from flask_cors import cross_origin
import sklearn
import pickle
import pandas as pd


app = Flask(__name__)
model = pickle.load(open("predict.pkl", "rb"))


@app.route("/")
@cross_origin()
def home():
    return render_template("home.html")

@app.route("/predict", methods = ["GET", "POST"])
@cross_origin()
def predict():
    if request.method == "POST":      
      
    #   Receive inputs from Post req
        print('made inside post req')
        content = request.json
        print(content)

#        Logical_quotient_rating,i_get_stressed_out_easily,coding_skills_rating,public_speaking_points,i_am_always_prepared,
# i_follow_a_schedule,i_am_quick_to_understand_things,i_am_full_of_ideas,i_start_conversations,do_you_like_sports,
# entrepreneurial_mindset,tendency_to_worry,self_learning_capability,Extra_courses_did,Taken_inputs_from_seniors_or_elders,
# reading_and_writing_skills,memory_capability_score,worked_in_teams_ever,Introvert,interested_career_area_code,
# Type_of_company_want_to_settle_in_code,Interested_Type_of_Books_code,A_Non_Technical,A_Technical,B_hard_worker,B_smart_worker  

        prediction=model.predict([[
            content["Logical_quotient_rating"],content["i_get_stressed_out_easily"], content["coding_skills_rating"], 
            content["public_speaking_points"], content["i_am_always_prepared"], content["i_follow_a_schedule"], 
            content["i_am_quick_to_understand_things"], content["i_am_full_of_ideas"], content["i_start_conversations"], 
            content["do_you_like_sports"],
            content["entrepreneurial_mindset"], 
            content["tendency_to_worry"], content["self_learning_capability"], 
            content["Extra_courses_did"], content["Taken_inputs_from_seniors_or_elders"], 
            
            content["reading_and_writing_skills"], content["memory_capability_score"], 
            content["worked_in_teams_ever"],  content["Introvert"], content["interested_career_area_code"],
             content["Type_of_company_want_to_settle_in_code"],  content["Interested_Type_of_Books_code"], 
            content["A_Non Technical"],
              content["A_Technical"], 
             content["B_hard_worker"] , 
            content["B_smart_worker"]
            
          
           
            
             
             
        ]])

        print("===========================")
        print(prediction)
        print(prediction[0])
        print("===========================")
            
        return prediction[0]
    

        # prediction=model.predict([[
        #     Logical_quotient_rating, coding_skills_rating, hackathons, public_speaking_points,
        #    self_learning_capability,Extra_courses_did, 
        #    Taken_inputs_from_seniors_or_elders, worked_in_teams_ever, Introvert, reading_and_writing_skills,
        #    memory_capability_score,  
        #    B_hard_worker,B_smart_worker, A_Management, A_Technical, Interested_subjects_code, 
        #    Interested_Type_of_Books_code, certifications_code, 
        #    workshops_code, Type_of_company_want_to_settle_in_code,  interested_career_area_code
            
        # ]])

    output=(prediction[0],2)
        
    print(output)

    return jsonify(output)

    return render_template('home.html',prediction_text="The Course for you is. {}".format(output))


    return render_template("home.html")



if __name__ == "__main__":
     app.run(debug=True,use_reloader=False)