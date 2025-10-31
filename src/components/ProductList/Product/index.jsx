import { Link } from "react-router-dom";

const Product = (props) => {
    // const { title, price, id, category, images } = props.data;

    const { productName, price, productId, photoUrl, category } = props.data;

    return (
        <div className="col mb-4">
            <div className="card h-100">
                <img src={photoUrl} className="card-img-top" alt={productName} />
                <div className="card-body">
                    <span className="badge badge-primary mb-3">{category}</span>
                    <h5 className="card-title">{productName}</h5>
                    <p>${(price/100).toFixed(2)}</p>
                    {/* <p class="card-text">{description}</p> */}
                    <Link to={`/products/${productId}`} className="btn btn-primary btn-block">
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Product;