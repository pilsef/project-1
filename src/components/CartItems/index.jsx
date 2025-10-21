import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {

    const items = useSelector(state => state.items);
    const cartItemNumbers = useSelector(state => state.cartItemNumbers);

    return (
        <div className="card h-100 p-4">
            <h2 className="text-center">Items ({cartItemNumbers})</h2>

            <div>
                {items.map(item => (
                    <CartItem data={item} />
                ))}
            </div>
        </div>
    );
}

export default CartItems;