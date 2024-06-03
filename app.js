import express from 'express'
import {db} from './config/db.js'
import cookieParser from 'cookie-parser'
import methodOverride from 'method-override'
db()
import todoRouter from './routes/todoRoutes.js'
import userRouter from './routes/userRoutes.js'
let app=express()

//register the template engine
app.set("view engine","ejs")

app.use(cookieParser())
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//to serve static files
app.use(express.static("public"))


//base route
app.use("/api/v1/todo",todoRouter)
app.use("/api/v1/user",userRouter)




export default app;