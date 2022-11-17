#!/usr/bin/env python
# coding: utf-8

# In[2]:


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


        City = request.form["City"]
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

            
        Interest = request.form["Interest"]
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

        Job_domain = request.form["Job_domain"]
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
            


        Budget = request.form["Budget"]
        if (Budget == 'Low'):
            Budget = 1

        
        elif (Budget == 'Medium'):
            Budget = 2


        elif (Budget == 'High'):
            Budget = 3 


        else:
            Budget = 1
            

        CAO_Score = request.form["CAO_Score"]
        if (CAO_Score == 'Low'):
            CAO_Score = 1

        
        elif (CAO_Score == 'Medium'):
            CAO_Score = 2


        elif (CAO_Score == 'High'):
            CAO_Score = 3 


        else:
            CAO_Score = 1
            

        prediction=model.predict([[
            CAO_Score,
            Budget,
            City_code,
            Interest_code,
            Job_domain_code
            
        ]])

        output=round(prediction[0],2)

        return render_template('home.html',prediction_text="The College recommended is. {}".format(output))


        return render_template("home.html")




if __name__ == "__main__":
    app.run(debug=True)


# In[ ]:




