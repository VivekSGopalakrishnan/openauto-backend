const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectDB = async()=>{
    try{
        mongoose.set('strictQuery', true);
        const con = await mongoose.connect("mongodb+srv://vivek:vivek014@cluster0.bxxikkg.mongodb.net/open-auto?retryWrites=true&w=majority" , { useNewUrlParser: true, useUnifiedTopology: true })

        console.log(`Mongo Connected: ${con.connection.host}`);
    }
    catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports= connectDB