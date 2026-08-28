import { useState } from "react";
import { useCart } from "../context/useCart";

export default function Checkout() {
    const { items, total, clearCart } = useCart();

    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const deliveryFee = 100;
    const grandTotal = total + deliveryFee;

    const handleCheckout = () => {
        if (!address.trim()) {
            setMessage("Please enter your delivery address.");
            return;
        }

        setMessage(
            "Demo checkout created! Maya payment will be connected next."
        );

        console.log({
            items,
            address,
            subtotal: total,
            deliveryFee,
            total: grandTotal,
        });

        clearCart();
    };

    return (
        <main className="section checkout">
            <h1>Checkout</h1>

            <div className="checkout-grid">
                <div className="checkout-form">
                    <h2>Delivery Information</h2>

                    <label>Delivery Address</label>

                    <textarea
                        value={address}
                        onChange={(e) =>
                            setAddress(e.target.value)
                        }
                        placeholder="Enter your delivery address..."
                    />

                    <div className="map-placeholder">
                        🗺️ Google Maps will appear here
                    </div>

                    <button
                        className="primary-button"
                        onClick={handleCheckout}
                    >
                        Pay with Maya
                    </button>

                    {message && (
                        <p className="checkout-message">
                            {message}
                        </p>
                    )}
                </div>

                <div className="order-summary">
                    <h2>Order Summary</h2>

                    {items.map((item) => (
                        <div key={item.id}>
                            <span>
                                {item.productName} × {item.quantity}
                            </span>

                            <span>
                                ₱{(
                                    item.price * item.quantity
                                ).toLocaleString()}
                            </span>
                        </div>
                    ))}

                    <hr />

                    <div>
                        <span>Subtotal</span>
                        <span>₱{total.toLocaleString()}</span>
                    </div>

                    <div>
                        <span>Delivery</span>
                        <span>₱{deliveryFee}</span>
                    </div>

                    <h3>
                        Total: ₱{grandTotal.toLocaleString()}
                    </h3>
                </div>
            </div>
        </main>
    );
}
