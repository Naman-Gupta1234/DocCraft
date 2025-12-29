import mongoose from "mongoose";

const Connection=async (password='docsclone')=>{
    const  URL= `mongodb+srv://root:${password}@docs-clone.i6s4woo.mongodb.net/?retryWrites=true&w=majority`
 try {
    await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
    console.log(" DB connected")
 } catch (error) {
    console.log("error while connecting to Mongo",error);
    
 }
}

export default Connection;