import { useDispatch } from "react-redux";
import { addToCart, decreaseQuantity, deleteFromCart } from "../../../redux/actions/cart-actions";

const CartItem = (props) => {
    const item = props.data;

    const dispatch = useDispatch();

    const onIncreaseHandler = () => dispatch(addToCart(item));
    const onDecreaseHandler = () => dispatch(decreaseQuantity(item));
    const onDeleteHandler = () => dispatch(deleteFromCart(item));

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-2">
                    <img src={item.images[0]} alt="..." className="img-fluid" />
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">${item.price}</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
                <div className="col-3 align-self-center">
                    <button className="btn btn-primary btn-sm" onClick={onDecreaseHandler}>-</button>
                    <span className="ml-1 mr-1"> {item.quantity} </span>
                    <button className="btn btn-primary btn-sm" onClick={onIncreaseHandler}>+</button>
                    <button className="btn btn-danger btn-sm ml-5" onClick={onDeleteHandler}>x</button>
                </div>

            </div>
        </div>
    );
}

export default CartItem;