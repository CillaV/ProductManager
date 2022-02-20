import React, { useState } from 'react'
import axios from 'axios'



const NewProductForm = (props) => {
    
    //In product manager 1, this was where we instantiated our state via the useState hook as such: const [productList, setProductList] = useState([]);
    //Because Our state is now lifted, we destructure the keys of the same name as the getter/setter from the props object.
    //Our usage can stay practically identical due to the "same name for key & value" naming convention in Main.js
    
    const { products, setProducts } = props;
    
    
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

                //We set state to an array consisting of everything CURRENTLY in state via the spread operator on our getter PLUS whatever our response from our API is
                //Look back to our controller create logic to see where we defined that response (also check console logs)
                setProducts([...products, res.data])
                //upon a successful post request, we will setState back to "", which will clear out our form
                setTitle("")
                setPrice("")
                setDescription("")
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
                    <input type="text" name="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
                    {/* We set our value to title here mainly to help us clear out the inputs on submission */}
                </p>
                <p>
                    <label style={{color: "yellow", marginRight: "57px"}}>Price: </label>
                    <input type="number" name="price" value={price} onChange={(e)=> setPrice(e.target.value)} />

                </p>
                <p>
                    <label style={{color: "yellow", marginRight: "10px"}}>Description: </label>
                    <input type="textarea" name="description" value={description} onChange={(e)=> setDescription(e.target.value)} />

                </p>

                <button style={{backgroundColor:"green", height: "25px", width:"100px"}} >Add Product</button>

                {/* alt method */}
                {/* <input className="submit-input" type="submit" value="Create" /> */}

            </form>
        </div>
    )
}


export default NewProductForm;