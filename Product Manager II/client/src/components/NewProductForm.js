import React, { useState } from 'react'
import axios from 'axios'



const NewProductForm = (props) => {
    //To keep things simple, we will create state for all three fields.
    const [ title, setTitle ] = useState("")
    //Because our schema has price as a number, it will automatically convert "50" to 50 for example
    const [ price, setPrice ] = useState("")

    const [ description, setDescription ] = useState("")


    const productFormHandler = (e) => {
        //A form whose button is clicked has a default action which will clear state and refresh the page
      //we prevent that default with the following line:
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,  //shorthand for title:title
            price,  //NOTE: this only works if the getter name (price) EXACTLY matches the field in your schema
            description
        })
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                // ADDED -DID NOT HAVE ORGINALLY
                //upon a successful post request, we will setState back to "", which will clear out our form
            })
            .catch((err)=>{
                //For now, we will simply log out the error. In future assignments, this will be part of how we display back-end validations.
                console.log(err)
            })
    }



    return(

        <div>
            <header>Product Manager</header>
            
            <form onSubmit={ productFormHandler}>
                <p>
                    <label style={{color: "yellow", marginRight: "58px"}} >Title: </label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
                    {/* We set our value to title here mainly to help us clear out the inputs on submission */}
                </p>
                <p>
                    <label style={{color: "yellow", marginRight: "57px"}}>Price: </label>
                    <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)} />

                </p>
                <p>
                    <label style={{color: "yellow", marginRight: "10px"}}>Description: </label>
                    <input type="textarea" value={description} onChange={(e)=> setDescription(e.target.value)} />

                </p>

                <button style={{backgroundColor:"green", height: "25px", width:"100px"}} >Add Product</button>

                {/* alt method */}
                {/* <input className="submit-input" type="submit" value="Create" /> */}

            </form>
        </div>
    )
}


export default NewProductForm;