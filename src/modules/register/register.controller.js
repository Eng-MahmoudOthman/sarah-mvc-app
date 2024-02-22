import { userModel } from "../../../DataBase/models/user.model.js";
import { catchError } from "../../utilities/catchError.js";
import Joi from "joi";

const schema = Joi.object({
   name:Joi.string().min(2).max(20).required() ,
   email:Joi.string().email().required() ,
   password:Joi.string().pattern(/^[A-Za-z0-9]{3,}/).required() ,
   rePassword:Joi.string().valid(Joi.ref("password")).required() ,
})



export const registerController = catchError(
   async (req , res , next)=>{

      res.render("register.ejs" , { error:req.flash("info") , session:undefined })
      // res.render("register.ejs" , {error:req.query?.error , session:undefined })
   }
)

export const handleRegister = catchError(
   async (req , res , next)=>{

      const {error} = schema.validate(req.body , {abortEarly:false}) ;
      if(!error?.details){
         let user = await userModel.findOne({email:req.body.email}) ;
         if(user) return res.redirect("/register?error=Email Already Exist")
         await userModel.insertMany(req.body);
         return res.redirect("/login")
      }

      req.flash("info" , error?.details )//
      res.redirect("/register")
   }
)