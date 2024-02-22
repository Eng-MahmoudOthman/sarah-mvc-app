import { catchError } from "../../utilities/catchError.js";





export const homeController = catchError(
   async (req , res , next)=>{

      res.render("index.ejs" , {session:undefined})
   }
)