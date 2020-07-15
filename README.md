# Work-Track
A Nodejs, express and mongodb based productivity tracker app that keeps track of the work you did and the amount of time you spent working.

It uses Charts to show the data for the day as well as the overall working time for the past 30 days pictorially. 

## To run the app locally
- Clone the repo
- cd into the project folder
- Run `npm install` to install all the dependencies

### For adding mongodb
- Install mongodb from https://www.mongodb.com/try/download/community if you want to store the data locally onto your computer
- You can also use mongodb Atlas for cloud storage of your data
  - To do that, first create a mongodb atlas account
  - Go to your cluster and then click on the connect button
  - Select Connect your application and then copy the connection string
  - Now, into the project folder, create a file named `.env` and add the following code
  - `MONGODB_URI = <your_connection_string>`
  
### Run node app.js and navigate to localhost:3000 on your browser
