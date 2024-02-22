import { messageModel } from "../../../DataBase/models/message.model.js";
import { userModel } from "../../../DataBase/models/user.model.js";
import { catchError } from "../../utilities/catchError.js";





export const messageController = catchError(
   async (req , res , next)=>{
      const user = await userModel.findById(req.params.id) ;


      res.render("message.ejs" , {session:undefined , user ,  userId:req.params.id})
   }
)


export const messageSend = catchError(
   async (req , res , next)=>{
      await messageModel.insertMany({ message:req.body.message ,  userId:req.params.id})

      res.redirect(`/message/${req.params.id}`)
   }
)