import React, { useState } from 'react'
import axios from "axios"
export default function Contact() {

  const handleChange=(e)=>{
    setInputs((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }));
  } 
  const[inputs,setInputs]=useState({
    email:'',
    message:''
  })
  const request= async ()=>{
    const res= await axios.post('http://localhost:5000/contact',{
        email:inputs.email,
        message:inputs.message
      }).catch((err)=>console.log(err))
      const data= await res
      return data
    }
  const handleSubmit=(e)=>{
    e.preventDefault()
   
      request().then(data=>console.log(data))
      console.log(inputs) 
  
  }
  return (
    <form action="" onSubmit={handleSubmit}>
    <div className='w-30 h-30 bg-amber-200 flex items-center justify-center py-7 flex-col gap-2'>
    <h3 className='text-5xl text-green-600'>contact</h3>

    <div><h5>Email</h5> <input type="text" className='rounded-full h-10' placeholder='email' 

      name='email' onChange={handleChange}
    /></div>
    <div> <h6>Message</h6><textarea type="text" name="message" id="message" placeholder='message' onChange={handleChange}
 className='md:w-80 w-72'
     /></div>
<button className='contained' type='submit' >Submit</button> 

{/* <button onClick={()=>setInputs({
  email:'',
  message:''
})}>cancel</button> */}
   
    </div></form>
  )
}
