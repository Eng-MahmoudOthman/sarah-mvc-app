import { Schema, Types, model } from "mongoose";
// import bcrypt from "bcrypt";


const userSchema = new Schema({
   name:{
      type:String , 
   } ,
   email:{
      type:String ,
      // required:true ,
      unique:[true , "Email is Required"]
   } ,
   password :{
      type:String ,
      // required :[true , "Password is required"] 
   } ,
   imgCover:{
      type:String ,
   } ,
} , { timestamps:true } )


// //& Hash Password Before Save When Add User :
// userSchema.pre("save"  , function(){
//    if(this.password) this.password = bcrypt.hashSync(this.password , 8) ;
// }) ;


//& Hash Password Before Save When Update User :
// userSchema.pre("findOneAndUpdate" , function(){
//    if(this._update.password) this._update.password = bcrypt.hashSync(this._update.password , 8) ; 

export const userModel = model("user" , userSchema)
