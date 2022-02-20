
import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";


const EditProduct = (props) =>{

    const { id } = props;

    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState("")

    // handles preloading the form
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
                
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])



    // handles changes made to form
    const editFormHandler = (e) =>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/products/${id}`, 
        {
            title,
            price,
            description
        })
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
            })
    }





    return(

        <div>
            <header>Update</header>
            
            <form onSubmit={ editFormHandler}>
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

                <button style={{backgroundColor:"green", height: "25px", width:"100px"}} >Update</button>

                {/* alt method */}
                {/* <input className="submit-input" type="submit" value="Create" /> */}

            </form>
        </div>

    )
}


export default EditProduct;