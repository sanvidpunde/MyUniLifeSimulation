FROM node:alpine

# Creating app directory
WORKDIR '/app'
COPY package.json
RUN npm install
COPY . .
CMD ["npm", "start"]

# RUN mkdir -p /home/ubuntu/deployment/app
# WORKDIR /home/ubuntu/deployment/app

# COPY package.json /home/ubuntu/deployment/app

# RUN npm install

# CMD ["npm", "start"]