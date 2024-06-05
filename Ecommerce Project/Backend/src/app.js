import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import productRouter from './routes/product.routes.js';
// configuring env

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cookieParser())

// routes

app.use("/api/v1/product",productRouter)
export default app;

