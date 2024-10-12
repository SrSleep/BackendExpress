import express from "express";
import "dotenv/config.js"
import "./config/database.js"
import cors from 'cors'
import morgan from "morgan";
import indexRouter from './router/index.js'

const server = express()

const PORT = process.env.PORT || 8080

const ready = () => console.log("Server ready in port :" + PORT);

server.use(express.json())// permite trabajar el formato json
server.use(express.urlencoded({ extended: true }))// permite trabjar los datos por url
server.use(cors())//permite que node  me permita entrar con la key sino no deja entrar a nadie
server.use(morgan('dev'))// para controlar y ver las trasas de las peticiones el sabe cuando es dev como localhost

//Router
server.use('/api',indexRouter)

server.listen(PORT, ready)
