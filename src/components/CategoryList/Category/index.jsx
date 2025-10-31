import { Link } from "react-router-dom";

const Category = (props) => {

    const { categoryId, categoryName, photoUrl } = props.data;

    return (
        <div className="col mb-4">
            <div class="card h-100">
                <img src={photoUrl} className="card-img-top" alt={categoryName} />
                <div className="card-body">
                    <h5 className="card-title">{categoryName}</h5>
                    <Link to="/products" className="btn btn-primary btn-block">
                        Select
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Category;