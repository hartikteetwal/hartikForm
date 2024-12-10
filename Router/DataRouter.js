import express from "express";
import {addData, deleteData, getData } from "../contreollers/DataControllers.js";

const DataRouter = express.Router()

DataRouter.post('/adddata',addData)
DataRouter.get('/getdata',getData)
DataRouter.post('/deldata',deleteData)

export {DataRouter}