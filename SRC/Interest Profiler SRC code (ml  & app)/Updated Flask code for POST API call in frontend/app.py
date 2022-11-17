from flask import Flask, request, render_template
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

 ###################   Logical_quotient_rating   #################################        
        Logical_quotient_rating = request.form["Logical_quotient_rating"]
        if (Logical_quotient_rating == 1):
            Logical_quotient_rating = 1

        
        elif (Logical_quotient_rating == 2):
            Logical_quotient_rating = 2
        elif (Logical_quotient_rating == 3):
            Logical_quotient_rating = 3
        elif (Logical_quotient_rating == 4):
            Logical_quotient_rating = 4
        elif (Logical_quotient_rating == 5):
            Logical_quotient_rating = 5
        elif (Logical_quotient_rating == 6):
            Logical_quotient_rating = 6
        elif (Logical_quotient_rating == 7):
            Logical_quotient_rating = 7
        elif (Logical_quotient_rating == 8):
            Logical_quotient_rating = 8
        elif (Logical_quotient_rating == 9):
            Logical_quotient_rating = 9           


        else:
            Logical_quotient_rating = 0
            
 ###################   hackathons   #################################            

        hackathons = request.form["hackathons"]
        if (hackathons == 1):
            hackathons = 1

        
        elif (hackathons == 2):
            hackathons = 2
        elif (hackathons == 3):
            hackathons = 3
        elif (hackathons == 4):
            hackathons = 4
        elif (hackathons == 5):
            hackathons = 5
        elif (hackathons == 6):
            hackathons = 6      
        else:
            Logical_quotient_rating = 0     
            
 ###################   coding_skills_rating   #################################                    

        coding_skills_rating = request.form["coding_skills_rating"]
        if (coding_skills_rating == 1):
            coding_skills_rating = 1

        
        elif (coding_skills_rating == 2):
            coding_skills_rating = 2
        elif (coding_skills_rating == 3):
            coding_skills_rating = 3
        elif (coding_skills_rating == 4):
            coding_skills_rating = 4
        elif (coding_skills_rating == 5):
            coding_skills_rating = 5
        elif (coding_skills_rating == 6):
            coding_skills_rating = 6
        elif (coding_skills_rating == 7):
            coding_skills_rating = 7
        elif (coding_skills_rating == 8):
            coding_skills_rating = 8
        elif (coding_skills_rating == 9):
            coding_skills_rating = 9           


        else:
            coding_skills_rating = 0
            
 ###################   public_speaking_points   #################################                    

        public_speaking_points = request.form["public_speaking_points"]
        if (public_speaking_points == 1):
            public_speaking_points = 1

        
        elif (public_speaking_points == 2):
            public_speaking_points = 2
        elif (public_speaking_points == 3):
            public_speaking_points = 3
        elif (public_speaking_points == 4):
            public_speaking_points = 4
        elif (public_speaking_points == 5):
            public_speaking_points = 5
        elif (public_speaking_points == 6):
            public_speaking_points = 6
        elif (public_speaking_points == 7):
            public_speaking_points = 7
        elif (public_speaking_points == 8):
            public_speaking_points = 8
        elif (public_speaking_points == 9):
            public_speaking_points = 9           


        else:
            public_speaking_points = 0    
            
 ###################   self_learning_capability   #################################        
            
        self_learning_capability = request.form["self_learning_capability"]
        if (self_learning_capability == 'no'):
            self_learning_capability = 0

        
        elif (self_learning_capability == 'yes'):
            self_learning_capability = 1
        


        else:
            self_learning_capability = 0    
            
 ###################   Extra_courses_did   #################################                    
            
            
        Extra_courses_did = request.form["Extra_courses_did"]
        if (Extra_courses_did =='no' ):
            Extra_courses_did = 0

        
        elif (Extra_courses_did == 'yes'):
            Extra_courses_did = 1
                  


        else:
            Extra_courses_did = 0
            
 ###################   reading_and_writing_skills   #################################                
            
        reading_and_writing_skills = request.form["reading_and_writing_skills"]
        if (reading_and_writing_skills == 1):
            reading_and_writing_skills = 1        
        elif (reading_and_writing_skills == 2):
            reading_and_writing_skills = 2
        elif (reading_and_writing_skills == 0):
            reading_and_writing_skills = 0
                 


        else:
            reading_and_writing_skills = 0
            
 ###################   memory_capability_score   #################################               
            
        memory_capability_score = request.form["memory_capability_score"]
        if (memory_capability_score == 0):
            memory_capability_score = 0

        
        elif (memory_capability_score == 1):
            memory_capability_score = 1
        elif (memory_capability_score == 2):
            memory_capability_score = 2          


        else:
            memory_capability_score = 0  
 ###################   Taken_inputs_from_seniors_or_elders   #################################           
        Taken_inputs_from_seniors_or_elders = request.form["Taken_inputs_from_seniors_or_elders"]
        if (Taken_inputs_from_seniors_or_elders == 0):
            Taken_inputs_from_seniors_or_elders = 0
        
        elif (Taken_inputs_from_seniors_or_elders == 1):
            Taken_inputs_from_seniors_or_elders = 1     

        else:
            Taken_inputs_from_seniors_or_elders = 0 
            
###################   worked_in_teams_ever   #################################
        worked_in_teams_ever = request.form["worked_in_teams_ever"]
        if (worked_in_teams_ever == 0):
            worked_in_teams_ever = 0
        elif (worked_in_teams_ever == 1):
            worked_in_teams_ever = 1   
        else:
            worked_in_teams_ever = 0 
            
###################   certifications   #################################            
            
            
        certifications = request.form["certifications"]
        if (certifications == 'app development'):
            certifications_code = 0
        
        elif (certifications == 'distro making'):
            certifications_code = 1
            
        elif (certifications == 'full stack'):
            certifications_code = 2 

        elif (certifications == 'hadoop'):
            certifications_code = 3

        elif (certifications == 'information security'):
            certifications_code = 4

        elif (certifications == 'machine learning'):
            certifications_code = 5

        elif (certifications == 'python'):
            certifications_code = 6

        elif (certifications == 'r programming'):
            certifications_code = 7
 
        elif (certifications == 'shell programming'):
            certifications_code = 8

#         else:
#             certifications_code = 0            
            
            
 ###################   workshops   #################################         
                        
        workshops = request.form["workshops"]
        if (workshops == 'cloud computing'):
            workshops_code = 0
        
        elif (workshops == 'data science'):
            workshops_code = 1
            
        elif (workshops == 'database security'):
            workshops_code = 2 

        elif (workshops == 'game development'):
            workshops_code = 3

        elif (workshops == 'hacking'):
            workshops_code = 4

        elif (workshops == 'system designing'):
            workshops_code = 5

        elif (workshops == 'testing'):
            workshops_code = 6

        elif (workshops == 'web technologies'):
            workshops_code = 7
 

        else:
            workshops_code = 0         
            
            
 ###################   interested_subjects   #################################         
                        
        interested_subjects = request.form["interested_subjects"]
        if (interested_subjects == 'Computer Architecture'):
            Interested_subjects_code = 0
        
        elif (interested_subjects == 'IOT'):
            Interested_subjects_code = 1
            
        elif (interested_subjects == 'Management'):
            Interested_subjects_code = 2 

        elif (interested_subjects == 'Software Engineering'):
            Interested_subjects_code = 3

        elif (interested_subjects == 'cloud computing'):
            Interested_subjects_code = 4

        elif (interested_subjects == 'data engineering'):
            Interested_subjects_code = 5

        elif (interested_subjects == 'hacking'):
            Interested_subjects_code = 6

        elif (interested_subjects == 'networks'):
            Interested_subjects_code = 7
        elif (interested_subjects == 'parallel computing'):
            Interested_subjects_code = 8 
        elif (interested_subjects == 'programming'):
            Interested_subjects_code = 9
#         else:
#             Interested_subjects_code = 0   
            
###################   interested_career_area   #################################         
                        
        interested_career_area = request.form["interested_career_area"]
        if (interested_career_area == 'Business process analyst'):
            interested_career_area_code = 0
        
        elif (interested_career_area == 'cloud computing'):
            interested_career_area_code = 1
            
        elif (interested_career_area == 'developer'):
            interested_career_area_code = 2 

        elif (interested_career_area == 'security'):
            interested_career_area_code = 3

        elif (interested_career_area == 'system developer'):
            interested_career_area_code = 4

        elif (interested_career_area == 'testing'):
            interested_career_area_code = 5

#         else:
#             interested_career_area_code = 0   
            
###################   Type_of_company_want_to_settle_in   #################################         
                        
        Type_of_company_want_to_settle_in = request.form["Type_of_company_want_to_settle_in"]
        if (Type_of_company_want_to_settle_in == 'BPA'):
            Type_of_company_want_to_settle_in_code = 0
        
        elif (Type_of_company_want_to_settle_in == 'Cloud Services'):
            Type_of_company_want_to_settle_in_code = 1
            
        elif (Type_of_company_want_to_settle_in == 'Finance'):
            Type_of_company_want_to_settle_in_code = 2 

        elif (Type_of_company_want_to_settle_in == 'Product based'):
            Type_of_company_want_to_settle_in_code = 3

        elif (Type_of_company_want_to_settle_in == 'SAaS services'):
            Type_of_company_want_to_settle_in_code = 4

        elif (Type_of_company_want_to_settle_in == 'Sales and Marketing'):
            Type_of_company_want_to_settle_in_code = 5

        elif (Type_of_company_want_to_settle_in == 'Service Based'):
            Type_of_company_want_to_settle_in_code = 6

        elif (Type_of_company_want_to_settle_in == 'Testing and Maintainance Services'):
            Type_of_company_want_to_settle_in_code = 7
        elif (Type_of_company_want_to_settle_in == 'Web Services'):
            Type_of_company_want_to_settle_in_code = 8 
        elif (Type_of_company_want_to_settle_in == 'product development'):
            Type_of_company_want_to_settle_in_code = 9
        else:
            Type_of_company_want_to_settle_in_code = 0 
            
###################   Interested_Type_of_Books   #################################   
            
        Interested_Type_of_Books = request.form["Interested_Type_of_Books"]
        if (Interested_Type_of_Books == 'Autobiographies'):
            Interested_Type_of_Books_code = 3
        elif (Interested_Type_of_Books == 'Series'):
            Interested_Type_of_Books_code = 28
        
        else:
            Interested_Type_of_Books_code = 28 
            
            
###################   hard_smart_worker   #################################   
            
        hard_smart_worker = request.form["hard_smart_worker"]
        if (hard_smart_worker == 'hard worker'):
            B_hard_worker = 1
            B_smart_worker= 0
        elif (hard_smart_worker == 'smart worker'):
            B_hard_worker = 0
            B_smart_worker= 1     
        else:
            B_hard_worker = 0
            B_smart_worker= 1  
            
###################   Management_or_Technical   #################################   
            
        Management_or_Technical = request.form["Management_or_Technical"]
        if (Management_or_Technical == 'Management'):
            A_Management = 1
            A_Technical = 0
        elif (Management_or_Technical == 'Technical'):
            A_Management = 0
            A_Technical = 1   
        else:
            A_Management = 0
            A_Technical = 1   
###################   Introvert   #################################   
            
        Introvert = request.form["Introvert"]
        if (Introvert == 'no'):
            Introvert = 0
        elif (Introvert == 'yes'):
            Introvert = 1
  
        else:
             Introvert = 1             
            
################################################################################################
      
            

        prediction=model.predict([[
Logical_quotient_rating, coding_skills_rating, hackathons, public_speaking_points,
           self_learning_capability,Extra_courses_did, 
           Taken_inputs_from_seniors_or_elders, worked_in_teams_ever, Introvert, reading_and_writing_skills,
           memory_capability_score,  
           B_hard_worker,B_smart_worker, A_Management, A_Technical, Interested_subjects_code, 
           Interested_Type_of_Books_code, certifications_code, 
           workshops_code, Type_of_company_want_to_settle_in_code,  interested_career_area_code
            
        ]])

        output=(prediction[0],2)
        
        print(output)

    return render_template('home.html',prediction_text="The Course for you is. {}".format(output))


    return render_template("home.html")



if __name__ == "__main__":
     app.run(debug=True,use_reloader=False)