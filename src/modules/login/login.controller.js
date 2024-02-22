import Joi from "joi";
import { userModel } from "../../../DataBase/models/user.model.js";
import { catchError } from "../../utilities/catchError.js";




const schema = Joi.object({
   email:Joi.string().email().required() ,
   password:Joi.string().pattern(/^[A-Za-z0-9]{3,}/).required() 
})




export const loginController = catchError(
   async (req , res , next)=>{
      res.render("login.ejs" , {loginError:req.query.loginError  ,  error:req.flash("info")  , session:undefined})
   }
)


export const handleLogin = catchError(
   async (req , res , next)=>{

      const{error} = schema.validate(req.body  , {abortEarly:false})

      if(!error?.details){
         const user = await userModel.findOne({email:req.body.email}) ;
         if(!user) return res.redirect("/login?loginError=Invalid Email Or Password") ;
         if(user.password != req.body.password) return res.redirect("/login?loginError=Invalid Email Or Password") ;
   
         // res.setHeader("set-cookie" , "userId=" + user._id)
         req.session.isLoggedIn = true ;
         req.session.userId = user._id ;
         req.session.name = user.name ;
         req.session.email = user.email ;

         return res.redirect("/user") ;
      }
      req.flash("info" , error?.details )
      res.redirect("/login") ;
   }
)


