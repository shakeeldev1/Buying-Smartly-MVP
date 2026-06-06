import { products } from '../data/products'
import ProductCard from '../components/common/ProductCard'

function Services() {
    return (
        <main className="bg-white text-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold">Our Services & Products</h1>
                    <p className="mt-3 text-slate-600">Explore premium services and curated product offerings.</p>
                </div>

                <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((p) => (
                        <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} description={p.description} />
                    ))}
                </section>
            </div>
        </main>
    )
}

export default Services
