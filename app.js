import express from "express";
import dotenv from "dotenv"

import { connectDB } from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

dotenv.config();

const app=express()

app.use(express.json())

connectDB();

app.use('/api/auth',authRoutes)

app.use('/api/todos',todoRoutes)

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`))