import { Contact } from "@/data/models/contactModel";
import { Mongo_Url } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req){
    await mongoose.connect(Mongo_Url);
    const data = await Contact.find();
    // console.log(data)
    return NextResponse.json({msg:data})
}

export async function POST(req){
    let payload=await req.json();
    await mongoose.connect(Mongo_Url);
    let contactMsg = new Contact(payload)
    let data = await contactMsg.save();
    return NextResponse.json({data,success:true})
}