
//! Handle Error External Express => Start the Code :
process.on("uncaughtException" , (error)=>{
   console.log("Error" , error);
})


import express from 'express'
import { initApp } from './src/initApp.js';
import { dbConnection } from './DataBase/dbConnection.js';
import cors from 'cors';
import session from 'express-session';
import flash from 'connect-flash';
import mongoSession from "connect-mongodb-session" ;
// import { CronJob } from 'cron';




const app = express()
const port = process.env.PORT || 5000 ;


const MongoDBStore = mongoSession(session)
const store = new MongoDBStore({
   uri:process.env.URL_CONNECTION_DB_ATLAS ,
   collection: 'mySessions'
});

app.use(session({
   secret: process.env.SECRET_KEY ,
   resave: false ,
   saveUninitialized: false ,
   cookie: { secure: false } ,
   store:store
}))



//& Express Middle Ware :
app.use(express.urlencoded({extended:true})) ;
app.use(cors()) ;
app.use(flash()) ;
app.use(express.static("public")) ;




import { CronJob } from 'cron';

const job = new CronJob(
	'*/5 * * * *', // cronTime
	function () {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
	}, // onTick
	null, // onComplete
	true, // start
	'America/Los_Angeles' // timeZone
);







initApp(app)

//& Data Base Connection :
dbConnection()


//! Handle Error dbConnection And External Express => End the Code :
process.on("unhandledRejection" , (error)=>{
   console.log("Error" , error);
});


app.listen(port, () => console.log(`Server is running ....`))


