import app from "./app.js"
import http from "http"
const port = process.env.PORT || 3000



const server = http.createServer(app);

server.listen(port,(req,res)=>{
    console.log(`Server is running on port http://localhost:${port}`)  
})