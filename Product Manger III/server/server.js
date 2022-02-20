//Note: the order we write these lines in matter. Stick to this order for proper functionality.

const express = require("express"); //express is a powerful framework for our node server.
const cors = require("cors");
const app = express()   //the express method allows us to create an express application
const port = 8000;



// allow json objects to be posted
app.use(express.json()) //middleware that allows us to read JSON objects sent in the client's request

// allow json objects with strings and arrays
app.use(express.urlencoded({extended:true}))    //middleware that allows us to read JSON objects with strings and arrays in the client's request



// cors cross-origin requests
app.use(cors({origin:"http://localhost:3000"})) //cors is going to allow different ports to send requests to our API

//To allow requests from any client origin/port, app.use(cors()) is available but this can present security concerns.


// require db connection
require("./config/mongoose.config") //we require our mongoose config file so that it is available to our express method


// require routes w/ app
require("./routes/product.routes")(app)
//we require our routes folder which had a function (with an app parameter) exported in this short-hand syntax. 
//The express method must be added as an argument. 
//See the routes file to better understand how these work together.

//here is the long-hand syntax to get a better idea of what's happening here.
    //const productRoutes = require("./routes/product.routes")
    //productRoutes(app)



//We set our node server to listen on port 8000
app.listen(port, ()=>console.log(`Success! Now listening on port ${port}.`));