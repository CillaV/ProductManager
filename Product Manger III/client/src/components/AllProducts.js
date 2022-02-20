import { useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";


const AllProducts = (props) => {


    //Any change that happens in create, is available here as well due to state lifted and passed down from their common parent (Main)

    const {products, setProducts} = props;

    //On initial render of this component, this useEffect will run its request to our Server
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data)
                setProducts(res.data)
            })
            .catch((err)=>{
                console.log(err)
                
            })
    }, [])  //An empty dependency array means the useEffect is not listening for any state change. 
    //It will run only on a complete render (e.g. initial render, refresh, or coming back to this component from another)


    const deleteProduct = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setProducts(products.filter((product, index)=> product._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    


    return(
        

        <div>
            
            {
                products.map((product, index)=>{
                    return(
                    <div key={index}>
                        {/* This is where :id in our app.js path gets its value... We can access this info via props */}
                        {/* Note: when styling, the DOM read "Link" as an a tag */}

                        {/* <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p> */}
                        {/* does not need to be on allproducts -- instead show on oneproduct */}
                        <div className="productList">
                            <Link to={`/${product._id}`} >{product.title}</Link>
                            <Link style={{marginLeft: "10px"}}to={`/edit/${product._id}`} >Edit</Link>
                            <button onClick={()=> deleteProduct(product._id)}>DELETE</button>
                        </div>

                    </div>
                    )
                })
            }

            
        </div>
    )
}


export default AllProducts;