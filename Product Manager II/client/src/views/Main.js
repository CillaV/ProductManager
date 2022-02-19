import NewProductForm from "../components/NewProductForm";
import AllProducts from "../components/AllProducts";
import { useState } from "react";


const Main = (props) => {

    const [products, setProducts] = useState([])

    return(
        

        <div>
            <NewProductForm products={products} setProducts={setProducts} />

            <br/>
            <hr/>
            <br/>

            <AllProducts products={products} setProducts={setProducts} />
        </div>
    )
}


export default Main;