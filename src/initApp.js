import { globalError } from "./middleWare/globalError.js";

import env from "dotenv"

env.config()
import userRouter from "./modules/user/user.routes.js"
import homeRouter from "./modules/home/home.routes.js"
import registerRouter from "./modules/register/register.routes.js"
import loginRouter from "./modules/login/login.routes.js"
import messageRouter from "./modules/message/message.routes.js"

export const initApp = (app)=>{



   
   //^ User Routing :
   
   app.use(homeRouter)
   app.use(registerRouter)
   app.use(loginRouter)
   app.use(userRouter)
   app.use(messageRouter)



   //^ Express Middle Ware
   app.get('/*', (req, res) => res.json({message:'Not_Found_Page'}))





   //^ global Error Handling Middle Ware :
   app.use(globalError) ;
}