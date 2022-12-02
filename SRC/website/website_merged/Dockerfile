FROM node:latest

# Creating app directory
RUN mkdir -p /home/ubuntu/deployment/backend-app
WORKDIR /home/ubuntu/deployment/backend-app

COPY package.json /home/ubuntu/deployment/backend-app

RUN npm install

CMD ["npm", "start"]