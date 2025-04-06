import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name : {type:String,required:true},
    description : {type:String,required:true},
    price : {type:Number,required:true},
    Image : {type:String,required:true},
    catagory : {type:String,required:true}
})

const serviceModel = mongoose.model.service || mongoose.model("service",serviceSchema)

export default serviceModel;