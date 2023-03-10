const express=require("express");
const connection=require("./configs/db")
const {userRouter}=require("./routes/user.routes")
const {noteRouter}=require("./routes/notes.route")
const {authenticate}=require("./middleware/auth.middleware")
const app=express();
const cors=require("cors")
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use("/user",userRouter)
app.use(authenticate)
app.use("/notes",noteRouter)



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to db")
    } catch (error) {
        console.log(error.message)
    }
    console.log("sever is running at http://localhost:4500/")
})