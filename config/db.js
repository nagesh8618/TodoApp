import mongoose from "mongoose";

export async function db(){
try {
    let database=await mongoose.connect('mongodb://127.0.0.1/TodoDB')
    console.log(`db is connected on ${database.connection.host}`);
} catch (error) {
    console.log(error.message);
}
}