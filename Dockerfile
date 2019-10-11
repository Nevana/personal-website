#Latest node version
FROM node:8
#Creat workdir
WORKDIR /usr/src/personal-website
#Copy type dependency
COPY package*.json ./
#Install dependecy
RUN npm install
#Copy the app source code
COPY . .
#Open port in contaiener
EXPOSE 8080
#Start node service
CMD [ "npm", "start" ]