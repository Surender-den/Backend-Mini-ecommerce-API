const orderModel = require('../model/ordersmodel')
const ProductModel = require('../model/productmodel')

exports.createorders = async (req,res,next)=>{
 const cartItems = req.body;
 const amount = Number(cartItems.reduce((acc,item)=> (acc+item.product.price * item.qty),0)).toFixed(2)
 const status = 'pending';
 console.log(amount,'Amount');
 const order = await orderModel.create({cartItems,amount,status})


// Updating product stock
cartItems.forEach(async (item)=>{
    try{
const Product = await ProductModel.findById(item.product._id.$oid);
console.log(Product.stock-item.qty,'CurrentStock');
Product.stock -=  item.qty;
await Product.save();
    }catch(e){
        res.status(500).json({message:e.message})
    }
})


    res.json({
        sucess:true,
        order:order

    })
}