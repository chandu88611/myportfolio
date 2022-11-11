  import mongoose from "mongoose"
  
  const contactSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true,"please enter email"]

    },
    message:{
        type:String,
        required:[true,"please enter message"]

    }
},

)
export default mongoose.model('contacts',contactSchema)