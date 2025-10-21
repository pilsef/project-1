import { useSelector } from "react-redux";

const CartSummary = () => {

    const state = useSelector(state => state);

    const costItems = state.items.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);
    const costShipping = Math.ceil(costItems * 0.15);

    return (
        <div className="card h-100 p-2">

            <h2 className="text-center">Summary</h2>

            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <label>Cost of Items: </label>
                    <span>${costItems.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <label>Shipping: </label>
                    <span>${costShipping.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between font-weight-bold">
                    <label>Total:</label>
                    <span>${(costItems + costShipping).toFixed(2)}</span>
                </li>
            </ul>

            <button className="btn btn-primary">Pay</button>
        </div>
    );
}

export default CartSummary;