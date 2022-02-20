import NewProductForm from "../components/NewProductForm";
import AllProducts from "../components/AllProducts";
import { useState } from "react";


const Main = (props) => {

    //We make sure our state is lifted so that both children components can have access to our getter and setter
        //That way an update that happens in CreateProduct can be reflected in DisplayAll

    const [products, setProducts] = useState([])

    return(
        

        <div>
            
            {/* We pass down the getter/setter via props obj, with a key of productList and a value of (the getter itself) productList. 
                You can name the key whatever you want, but this naming convention allows for less confusion and easy usage
                (see deconstructuring/usage in Child components)*/}
            
            
            <NewProductForm products={products} setProducts={setProducts} />

            <br/>
            <hr/>
            <br/>

            <AllProducts products={products} setProducts={setProducts} />
        </div>
    )
}


export default Main;