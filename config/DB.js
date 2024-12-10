import mongoose from 'mongoose'

export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://teetwalhartik:258012@cluster0.jp9s6.mongodb.net/data").then(()=>console.log("DB Connected"))
}