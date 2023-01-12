const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const connectDB = async()=>{
    try{
        mongoose.set('strictQuery', true);
        const con = await mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true, useUnifiedTopology: true })

        console.log(`Mongo Connected: ${con.connection.host}`);
    }
    catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports= connectDB