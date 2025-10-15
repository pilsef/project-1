import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
    const {id} = useParams();

    const [product, setProduct] = useState(null)

    const fetchData = () => {
        axios
            .get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => fetchData(), [id]);

    if (product) {
        return (
            <div className="container mt-5">
                <div className="row row-cols-2 justify-content-center">
                    <div className="col">
                        <div className="prod-card">
                            <img className="img-fluid rounded" src={product.images[0]} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="prod-card">
                            <h2 className="pt-5">{product.title}</h2>
                            <span class="badge badge-primary mb-3">{product.category.name}</span>
                            <h4 className="mt-3">Description</h4>
                            <p>{product.description}</p>
                            <a className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>Product Loading...</div>
    }
}

export default ProductDetail;