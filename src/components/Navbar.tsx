import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function Navbar() {
    const { items } = useCart();

    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                🌿 Botanique
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/login">Login</Link>

                <Link to="/cart" className="cart-link">
                    🛒 Cart ({items.length})
                </Link>
            </div>
        </nav>
    );
}
