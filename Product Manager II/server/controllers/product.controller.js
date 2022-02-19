const Product = require("../models/product.model"); //Import the model from the model file

//With this syntax, we are exporting an object that consists of key:value pairs
    //the values consist of the logic used to query the DB
module.exports = {

    // create a product
    createProduct: (req, res) => {  //We name the key and the value is going to be the function that queries DB
        Product.create(req.body)
        .then((newProduct)=>{   //That returns a promise whose resolution we handle with then, and run .json on our response so that we can easily read the JSON object.
            console.log(newProduct);
            res.json(newProduct)
        })
        .catch((err)=>{
            console.log("Something went wrong in createProduct", err)
            res.status(400).json(err);  // error: err -- key value pairs used in front end to display messages and errors
        })  // done for every create or update
            // if no response sent to client -- would loop in browser til fail but log in console
    },

    // show all products
    findAllProducts: (req, res) => {
        Product.find()
        .then((allProducts)=>{
            console.log(allProducts)
            res.json(allProducts)
        })
        .catch((err)=>{
            console.log("Something went wrong with findAllProducts", err);
            res.json(err)
        })
    },

    // show a product
    findOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct)=>{
            console.log(oneProduct)
            res.json(oneProduct)
        })
        .catch((err)=>{
            console.log("Something went wrong in findOneProduct", err)
            res.json(err)
        })
    },

    // update a product
    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
        .then((updatedProduct)=>{
            console.log(updatedProduct)
            res.json(updatedProduct)
        })
        .catch((err)=>{
            console.log("Something went wrong with updateProduct", err)
            res.status(400).json(err)
        })  // done for every create or update
            // if no response sent to client -- would loop in browser til fail but log in console
    },

    // delete a product
    deleteProduct: (req, res)  => {
        Product.deleteOne({_id: req.params.id})
        .then((deletedProduct)=>{
            console.log(deletedProduct)
            res.json(deletedProduct)
        })
        .catch((err)=>{
            console.log("Something went wrong with deleteProduct", err)
            res.json(err)
        })
    }

}