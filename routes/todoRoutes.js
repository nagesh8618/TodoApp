import express from 'express'
import { deleteTodo, getTodo, getTodos, postTodo, updateTodo } from '../controllers/todoControllers.js'
import { auth } from '../middlewares/auth.js'
//router instance--to have routes
let todoRouter=express.Router()

//router level middleware
// todoRouter.use()

todoRouter.post("/",auth,postTodo)
todoRouter.get("/",auth,getTodos)
todoRouter.get("/:id",auth,getTodo)
todoRouter.put("/:id",auth,updateTodo)
todoRouter.delete("/:id",auth,deleteTodo)


export default todoRouter;