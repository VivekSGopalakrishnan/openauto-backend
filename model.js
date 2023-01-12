const mongoose = require('mongoose')

const dataS = mongoose.Schema(
    {
    name:{
        type: String,
        required: [true , 'Please add a value'],
    },
    email:{
        type: String,
        required: [true , 'Please add a value'],
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('data', dataS)