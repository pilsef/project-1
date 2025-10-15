import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";


const ProductList = () => {

    const [products, setProducts] = useState([]);

    const fetchData = () => {
        axios
            .get("https://api.escuelajs.co/api/v1/products")
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    };

    useEffect(() => fetchData, []);

    return (
        <div className="container">
            <h1 className="text-center">Product List</h1>
            <div className="row row-cols-4">
                {
                    products.map(p => (
                        <Product key={p.id} data={p} />
                    ))
                }
            </div>
        </div>
    );

}

export default ProductList;