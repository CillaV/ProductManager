import { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";


const OneProduct = (props) => {

    //BEcause we named the variable in our app.js path id, that is its key.
    //We gave that variable its value in Display.js when we traveled here via "Link".
        //That will allow us to deconstruct the value from props using the id key.
    const { id } = props;

    const [ product, setProduct ] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res)=>{
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])    //React will give us an "unused dependency" Yellow-Label Warning if we do not include this in the dependency array
    //Functionally, this is useless, we do not need this useEffect to run based on the changing of the id while in this component because there are no changes occurring here.
    //So in this example the above or simply [] will work the same way. We can just do this to eliminate the warning.


    const deleteProduct = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
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

            <Link to={"/"}>Home</Link>

            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={deleteProduct}>DELETE</button>
        </div>
    )
}


export default OneProduct;