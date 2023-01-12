const express= require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT||5000
const connectDB = require('./db')
const name = require('./model')
const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/api',async(req,res) => {
    const datas = await name.find()
    
    res.status(200).json( datas )
})

app.post('/api',async(req,res) => {
  if(!req.body.name){
    res.status(400)
    throw new Error('Please add a text')
  }

  if(!req.body.email){
    res.status(400)
    throw new Error('Please add a text')
  }
  const data1 = await name.create({
    name:req.body.name,
    email:req.body.email,
  });

  const val =await data1.save();
  res.status(200).json(data1)
})
app.listen(port, ()=> console.log(`server started on port ${port}`))