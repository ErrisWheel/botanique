import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { useCart } from "../context/useCart";

interface Props {
    product: Product;
}

export default function ProductCard({
    product,
}: Props) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <img
                src={product.imageUrl}
                alt={product.productName}
            />

            <div className="product-info">
                <span className="category">
                    {product.categoryId}
                </span>

                <h3>{product.productName}</h3>

                <p>{product.description}</p>

                <strong>
                    ₱{product.price.toLocaleString()}
                </strong>

                <div className="product-actions">
                    <Link
                        to={`/product/${product.id}`}
                    >
                        View
                    </Link>

                    <button
                        onClick={() =>
                            addToCart(product)
                        }
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}