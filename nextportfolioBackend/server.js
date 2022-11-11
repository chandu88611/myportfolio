import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import Contact from "./model.js"

const app=express()
app.use(cors());
  
app.use(express.json())

app.use(express.urlencoded({extended:true}))
const MONGO_URL="mongodb+srv://chandanas88:Chandu12345678@cluster0.srxfmuh.mongodb.net/?retryWrites=true&w=majority"
const connectDb=async()=>{
    try {
        await mongoose.connect(MONGO_URL).then(()=>console.log('connected')) 
    } catch (error) {
        console.log(error)
    }
}

connectDb()

const contactMe=async(req,res)=>{
const{email,message}=req.body;
const user = new Contact({
     email, message
})
try {
   await user.save()
} catch (error) {
    console.log(error)
}
// if (user) {
//     res.status(201).json(
//      user
//     )
//     res.status(200).json({message:'done'})
// } else {

//     res.status(401).json({ message: "message not created" })
// }

}
app.post('/contact',contactMe)

app.get('/' ,(req,res)=>{
res.json({
    me:'hdbc'
})
})
app.listen(5000,()=>{
    console.log("listening at port 5000")
})