const express = require('express');
const app = express();
const path = require('path');
const connectdatabase = require('./config/connectdatabase.js')
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,'config','config.env')})

connectdatabase()
app.use(express.json())
const products = require('./routes/product.js');
const orders = require('./routes/order.js');



app.use('/api/v1/',products)
app.use('/api/v1/',orders)


app.listen(process.env.PORT,()=>{
    console.log(`Server Is Listening port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})