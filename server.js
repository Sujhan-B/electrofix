import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import serviceRouter from "./routes/servicerouter.js"
 

const app =  express()
const port = 4000

app.use(express.json())
app.use(cors())

connectDB();

app.use("/api/service",serviceRouter);

app.get("/",(req,res)=>{
    res.send("am in")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://electrofix:<db_password>@cluster0.fr0o304.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0