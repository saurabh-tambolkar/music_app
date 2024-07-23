import mongoose from "mongoose";

const contactModel = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
}, {
    timestamps: true
});

export const Contact = mongoose.models.contact_info_messages || new mongoose.model("contact_info_messages",contactModel);