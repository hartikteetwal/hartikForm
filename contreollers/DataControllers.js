import dataModel from "../Models/dataModel.js";

const addData = async(req,res)=>{
    try {
         
        let name = req.body.name
        let email = req.body.email
    let DOB = req.body.dob
    let phone = req.body.phone
    let gender = req.body.gender

    const newData = new dataModel({
        name:name,
        email:email,
        DOB:DOB,
        phone:phone,
        gender:gender
    })
    const data = await newData.save()
    res.json({success:true,data})
} catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})   
}
}

const getData = async(req,res)=>{
    try {
        const data = await dataModel.find()
        console.log(data);
        res.json({success:true,data})
    } catch (error) {
        console.log(error);
    res.json({success:false,message:"Error"})
    }
}

const deleteData = async(req,res)=>{
    try {
        let index = req.body.index
        const data = await dataModel.find()
        console.log(dataModel()._id);
        const resu = data.filter((e,i)=>i!=index)

        await dataModel.findByIdAndDelete({_id:index})
        res.json({success:true,resu})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
const EditData = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

export {addData,getData,deleteData}