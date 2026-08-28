import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
    return (
        <>
            <section className="hero">
                <div>
                    <p className="eyebrow">WELCOME TO BOTANIQUE</p>

                    <h1>
                        Bring nature
                        <br />
                        into your space.
                    </h1>

                    <p>
                        Discover beautiful plants carefully selected
                        for your home and lifestyle.
                    </p>

                    <Link to="/shop" className="primary-button">
                        Shop Plants
                    </Link>
                </div>
            </section>

            <section className="section">
                <div className="section-header">
                    <div>
                        <p className="eyebrow">FEATURED</p>
                        <h2>Popular Plants</h2>
                    </div>

                    <Link to="/shop">View All →</Link>
                </div>

                <div className="product-grid">
                    {products.slice(0, 4).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
