const app = require("express")()
const socketIO = require("socket.io")
const util = require('util');
app.get("/",(req,res,next)=>{
    res.send("hello")
})
const server = app.listen(8080,()=>{
    console.log("Listening to the Port 8080...")
})
const io = socketIO(server,{cors:{origin:"*"}})
let prevState;
let entry = true;

io.on("connection",(socket)=>{
    // socket.on("data",(data)=>{
    //     console.log(data)
    //     socket.broadcast.emit("dataRecievedFromServer",data)
    // })
    socket.on("dataFromFrontend",(data)=>{
       if(entry){
           prevState = data;
           entry = false;
       }
    
        if(!util.isDeepStrictEqual(prevState, data)){
            socket.broadcast.emit("updatedDataFromBackend",data)
            prevState = data
            console.log("a")
        }
    })
})