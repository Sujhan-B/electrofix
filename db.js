import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://electrofix:@cluster0.fr0o304.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("DB connected"));
}
