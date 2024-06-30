const ProductModel = require('../model/productmodel');


//get products API -/api/v1/products
exports.getproducts = async (req,res,next)=>{

    const products = await ProductModel.find({})
    try{
        res.status(200).json({
            sucess:true,
            products
        })
    }catch(e){

        res.status(500).json({
            sucess:false,
            message:e.message
    })
}
}


//get singleproduct API -/api/v1/product
exports.singleproducts = async (req,res,next)=>{
    

    try{
        const {id} = req.params;
        const product = await ProductModel.findById(id);
        res.status(200).json(product)
      }catch(e){
          res.status(500).json({message:e.message})
      }
    
}