import { Schema, Types, model } from "mongoose";


const schema = new Schema({
   message:{
      type:String 
   } ,
   userId:{
      type:Types.ObjectId , 
      ref:"user"
   } ,
} , { timestamps:true } )


// schema.pre(/^find/ , function(){
//    this.populate("addedBy" , " username -_id")
//    // this.populate("all_Application" )
// })



export const messageModel = model("message" , schema)
