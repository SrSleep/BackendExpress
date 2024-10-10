import express from "express";
import "dotenv/config.js"
const server = express()
const PORT = process.env.PORT || 8080

const ready = () => console.log("Server ready in port :" + PORT);
server.get('/',(request,response) =>{
    response.send('Hola mundo en Express')
})
server.listen(PORT, ready)

console.log(process.env.PORT);
