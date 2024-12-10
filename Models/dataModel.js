import mongoose from "mongoose";

const DataSchema  = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    DOB:{type:String,required:true},
    phone:{type:String,required:true},
    gender:{type:String,required:true},
})

const dataModel = mongoose.model.datas || mongoose.model("data",DataSchema)
export default dataModel