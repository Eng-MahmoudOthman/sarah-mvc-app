

import mongoose from "mongoose";




//& Data Base Online Connection By Atlas :
export const dbConnection = async ()=>{
   await mongoose.connect(process.env.URL_CONNECTION_DB_ONLINE_ATLAS).then(()=>{
      console.log("dbConnect Online ...." );
   }).catch((error)=>{
      // console.log("Fail dbConnection ! " , error);
      console.log("Fail dbConnection Online ! " );
   })
}





