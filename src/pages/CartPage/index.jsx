import CartItems from "../../components/CartItems";
import CartSummary from "../../components/CartSummary";
import Navbar from "../../components/Navbar";

const CartPage = () => {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-9">
                        <CartItems />
                    </div>
                    <div className="col-3">
                        <CartSummary />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <div className="btn btn-primary">Checkout</div>
                </div>
            </div>
        </>
    );
}

export default CartPage;