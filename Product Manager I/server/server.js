const express = require("express");
const cors = require("cors");
const app = express()
const port = 8000;



// cors cross-origin requests
app.use(cors({origin:"http://localhost:3000"}))


// allow json objects to be posted
app.use(express.json())


// allow json objects with strings and arrays
app.use(express.urlencoded({extended:true}))


// require db connection
require("./config/mongoose.config")


// require routes w/ app
require("./routes/product.route")(app)




app.listen(port, ()=>console.log(`Success! Now listening on port ${port}.`));