import Todo from "../models/Todo.js"
import User from "../models/User.js"


//@Create a Todo
//@POST
//@path--/api/v1/todo
let postTodo=async (req,res)=>{
    try {
     await Todo.create(req.body)
     res.redirect("/api/v1/todo")
    } catch (error) {
     res.status(400).json({
         message:error.message
     })
    }
 }

//@Get all Todos
//@GET
//@path--/api/v1/todo
 let getTodos=async (req,res)=>{
    try {

        let todos=await Todo.find()
        let {name}=await User.findById(req.user)
        res.render("home",{
            todos,name
        })
    } catch (error) {
        res.status(400).json({
            message:error.message
        }) 
    }
}


//@Get a Todo
//@GET
//@path--/api/v1/todo/:id
let getTodo=async (req,res)=>{
    try {
     let id=req.params.id
     let todo=await Todo.findById(id)
     let {name}=await User.findById(req.user)
    res.render("update",{
        todo,name
    })
    } catch (error) {
     res.status(400).json({
         message:error.message
     }) 
    }
}


//@Update a Todo
//@PUT
//@path--/api/v1/todo/:id
let updateTodo=async (req,res)=>{
    try {
        let id=req.params.id
        await Todo.findByIdAndUpdate(id,req.body)
        // res.status(200).json(updatedTodo)
        res.redirect('/api/v1/todo')
       } catch (error) {
        res.status(400).json({
            message:error.message
        })  
       }
}

//@Delete a Todo
//@DELETE
//@path--/api/v1/todo/:id
let deleteTodo=async (req,res)=>{
    try {
        let id=req.params.id
        await Todo.findByIdAndDelete(id)
        res.redirect("/api/v1/todo")
       } catch (error) {
        res.status(400).json({
            message:error.message
        }) 
       }
}

export {
    postTodo,getTodos,getTodo,updateTodo,deleteTodo
}