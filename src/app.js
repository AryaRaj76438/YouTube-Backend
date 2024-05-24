import express from "express";

const app = express();

app.use(express.json())

import userRouter from "./routes/user.routes.js"
app.use('/user', userRouter)

export {app}