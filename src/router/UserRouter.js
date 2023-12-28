import { Router } from "express";
import { myLogger } from "../middleware/loggerMiddleware.js";
import { getByIdUser, getDeleteUser, getPutUser, getUser } from "../controller/UserController.js";
export const userRouter = Router()

userRouter.get('/', myLogger,getUser)
userRouter.get('/:id' , myLogger, getByIdUser)
userRouter.post('/' , myLogger , getPutUser)
userRouter.put('/:id' , myLogger , getPutUser)
userRouter.delete('/:id' , myLogger , getDeleteUser)