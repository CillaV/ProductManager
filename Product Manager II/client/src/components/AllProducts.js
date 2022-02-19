import { useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";


const AllProducts = (props) => {

    const {products, setProducts} = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err)=>{
                console.log(err)
                
            })
    }, [])




    return(
        

        <div>
            
            {
                products.map((product, index)=>{
                    return(
                    <div key={index}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>

                        <Link to={`/${product._id}`} >{product.title}</Link>



                    </div>
                    )
                })
            }


        </div>
    )
}


export default AllProducts;