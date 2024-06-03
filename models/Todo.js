import {Schema,model} from "mongoose";
//as mongodb is Schemaless defining schema is recommended 
let todoSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
})
//model the Todo collection using todoSchema using model function
let Todo=model("Todo",todoSchema)

export default Todo;