import { messageModel } from "../../../DataBase/models/message.model.js";
import { catchError } from "../../utilities/catchError.js";





export const userController = catchError(
   async (req , res , next)=>{
      let fullUrl = req.protocol + "://" + req.get("host") + ("/message/") + req.session.userId ;
      if(!req.session.isLoggedIn) return res.redirect("/login") ;

      const userMessages = await messageModel.find({userId:req.session.userId}) ;
      res.render("user.ejs" , {session:req.session , fullUrl , userMessages})
   }
)


export const logOutController = catchError(
   async (req , res , next)=>{
      req.session.destroy(() => {
         res.redirect('/login')
      })
   }
)

