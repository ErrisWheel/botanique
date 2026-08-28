import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/useCart";

export default function Product() {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = products.find(
        (item) => item.id === id
    );

    if (!product) {
        return <h1 className="section">Product not found.</h1>;
    }

    return (
        <main className="product-page">
            <img
                src={product.imageUrl}
                alt={product.productName}
            />

            <div>
                <span className="category">
                    {product.categoryId}
                </span>

                <h1>{product.productName}</h1>

                <h2>
                    ₱{product.price.toLocaleString()}
                </h2>

                <p>{product.description}</p>

                <p>
                    <strong>{product.stock}</strong> available
                </p>

                <button
                    className="primary-button"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>

                <br />

                <Link to="/shop">← Back to Shop</Link>
            </div>
        </main>
    );
}
