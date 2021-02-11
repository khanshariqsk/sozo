const app = require("express")()
const socketIO = require("socket.io")
const cors = require("cors")

// // app.use(cors())
// app.use((req, res, next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*')
//     res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization')
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE')
//     next()
//   })

app.get("/",(req,res,next)=>{
    res.send("hello")
})
const server = app.listen(8080,()=>{
    console.log("Listening to the Port 8080...")
})
const io = socketIO(server,{cors:{origin:"*"}})

io.on("connection",(socket)=>{
    // socket.on("data",(data)=>{
    //     console.log(data)
    //     socket.broadcast.emit("dataRecievedFromServer",data)
    // })
    socket.on("dataFromFrontend",(data)=>{
        socket.broadcast.emit("updatedDataFromBackend",data)
    })
})