const mongoose = require('mongoose');
const {Timestamp} = require('mongodb')

const productschema = new mongoose.Schema({
         name:String,
         price:String,
         description:String,
         ratings:String,
         images:[{
            image:String
         }],
         category:String,
         seller:String,
         stock:Number,
         numOfReviews:String,
         createdAt:Date,
         updatedAt:Date

      })

    const productmodel = mongoose.model('Product',productschema);

    module.exports = productmodel;