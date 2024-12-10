import express from 'express'
import { connectDB } from './config/DB.js'
import { DataRouter } from './Router/DataRouter.js'
import cors from 'cors'

const port = 4000
const app = express()

connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/form',DataRouter)

app.get('/',(req,res)=>{
    res.send("Hello word")
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})