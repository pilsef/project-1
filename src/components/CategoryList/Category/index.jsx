import { Link } from "react-router-dom";

const Category = (props) => {

    const { id, name, image } = props.data;

    return (
        <div className="col mb-4">
            <div class="card h-100">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <Link to="/products" className="btn btn-primary btn-block">
                        Select
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Category;