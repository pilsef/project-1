import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token");
        setIsLoggedIn(token !== null);
    }, [isLoggedIn]);

    const onLogoutHandler = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/login");
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="navbar-brand" to="#">Eshop</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    {/* <li class="nav-item">
                        <Link class="nav-link" to="/products">Products</Link>
                    </li> */}
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    {
                        isLoggedIn
                        ? <button className="btn btn-danger" onClick={onLogoutHandler}>Log Out</button>
                        : <Link className="btn btn-primary" to="/login">Log In</Link>
                    }
                </form>
            </div>
        </nav>
    );
}

export default Navbar;