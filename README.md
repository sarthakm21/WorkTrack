# Work Track
A Nodejs, express and mongodb based productivity tracker app that keeps track of the work you did and the amount of time you spent doing it.

It uses Charts to represent the data for the day as well as the overall working time for the past 30 days pictorially.
You can also share your work for others to see and view what others have shared by going to the inspire me section

## To install locally
```bash
$ git clone https://github.com/GeekHaven/WorkTrack
$ cd WorkTrack
$ npm install
```

## For adding mongodb
- Install mongodb from https://www.mongodb.com/try/download/community if you want to store the data locally onto your computer
- You can also use mongodb Atlas for cloud storage of your data
  - To do that, first create a mongodb atlas account
  - Go to your cluster and then click on the connect button
  - Select Connect your application and then copy the connection string
  - Now, into the project folder, create a file named `.env` and add the following code
  - `MONGODB_URI = <your_connection_string>`
  
### Finally
- Run `npm run dev` or `npm start` and navigate to `localhost:3000` on your browser
