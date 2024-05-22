import dotenv from "dotenv";
import express from "express";
import connectDB from "./database/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(
    ()=>{
        app.listen(process.env.PORT || 8000,
            ()=>{
                console.log(`Server is running on port ${process.env.PORT}`)
            }
        )
        app.on('error', (error)=>{
            console.log(`Error: ${error}`)
        })
    }
).catch(
    (error)=>{
        console.log("MONGODB connection failed! \nError: ", error)
    }
)
