import { Link } from "react-router-dom";

const Product = (props) => {
    const { title, price, id, category, images } = props.data;

    return (
        <div className="col mb-4">
            <div class="card h-100">
                <img src={images[0]} className="card-img-top" alt={title} />
                <div class="card-body">
                    <span class="badge badge-primary mb-3">{category.name}</span>
                    <h5 class="card-title">{title}</h5>
                    {/* <p class="card-text">{description}</p> */}
                    <Link to={`/products/${id}`} className="btn btn-primary btn-block">
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Product;