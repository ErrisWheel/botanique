import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
    return (
        <main className="section">
            <p className="eyebrow">BOTANIQUE SHOP</p>

            <h1>All Plants</h1>

            <p className="page-description">
                Find the perfect plant for your space.
            </p>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </main>
    );
}
