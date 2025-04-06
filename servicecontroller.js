import serviceModel from "../models/servicemodel.js";
import fs from "fs"


const addService = async(req,res) => {
    // if (!req.file) {
    //     return res.status(400).json({ success: false, message: "Image is required" });
    // }

    const image_filename = req.file.filename;

    const service  = new serviceModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        image: image_filename,
        category: req.body.category
    });

    try {
        await service.save();
        res.json({ success: true, message: "Service added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding service" });
    }
}


export {addService}