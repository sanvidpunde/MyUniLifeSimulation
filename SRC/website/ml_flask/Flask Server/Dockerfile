# start by pulling the latest python image
FROM python:latest
#Expose the flask port to 5000
EXPOSE 5000/tcp
# working directory
WORKDIR /app
# copy the requirements file into the image
COPY ./requirements.txt .
COPY ./predictInterestProfiler.pkl .
COPY ./course_recommender_model.pkl .
# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt
# configure the container to run in an executed manner
COPY server.py .
#Set Virtual env for flask app
ENV FLASK_APP=server.py