# getting the base image 
FROM node:lts

# creating working direcotry 'app'
WORKDIR /app

# copying package.json and package-lock.json from local machine to container
COPY package*.json .

# Running 'npm install' in container
RUN npm install   
# shell form 

# copying all the files from local machine to container except for 'node_modules' folder which is specified in '.dockerignore' file
COPY . .

# exposing port 5000 of container 
EXPOSE 5000

# finally running 'npm start' to run app
CMD ["npm", "start"]    
# exec form 
