import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function Cart() {
    const {
        items,
        removeFromCart,
        total,
    } = useCart();

    if (items.length === 0) {
        return (
            <main className="section empty-state">
                <h1>Your cart is empty</h1>
                <p>Looks like you haven't added any plants yet.</p>
                <Link to="/shop" className="primary-button">
                    Browse Plants
                </Link>
            </main>
        );
    }

    return (
        <main className="section">
            <h1>Your Cart</h1>

            <div className="cart-list">
                {items.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.imageUrl} />

                        <div>
                            <h3>{item.productName}</h3>

                            <p>
                                ₱{item.price.toLocaleString()} ×{" "}
                                {item.quantity}
                            </p>
                        </div>

                        <button
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h2>
                    Total: ₱{total.toLocaleString()}
                </h2>

                <Link
                    to="/checkout"
                    className="primary-button"
                >
                    Proceed to Checkout
                </Link>
            </div>
        </main>
    );
}
