import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";


const OneProduct = (props) => {

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
    }, [id])



    return(
        

        <div>

            <Link to={"/"}>Home</Link>

            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}


export default OneProduct;