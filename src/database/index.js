import mongoose from "mongoose";
import {DATABASE_NAME} from "../constant.js"


const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        console.log(`Connected to MongoDB: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`\nMONGODB connection error: ${error}`)
        process.exit(1)
    }
}

export default connectDB