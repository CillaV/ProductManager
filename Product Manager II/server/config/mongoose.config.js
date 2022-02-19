const mongoose = require("mongoose");


const dbName = "productsDB";

mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`Success! You are connected to the ${dbName} database!`)
    })
    .catch((err)=>{
        console.log(`Fail! There was a problem connecting to the ${dbName} database.`, err)
    })