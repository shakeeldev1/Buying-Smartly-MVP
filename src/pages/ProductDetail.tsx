import { useParams } from 'react-router-dom'
import products from '../data/products'

function ProductDetail() {
    const { id } = useParams()
    const product = products.find((p) => String(p.id) === String(id))

    if (!product) {
        return (
            <main className="mx-auto max-w-4xl px-4 py-16">
                <p>Product not found.</p>
            </main>
        )
    }

    return (
        <main className="mx-auto max-w-4xl px-4 py-16">
            <div className="rounded-2xl overflow-hidden bg-white shadow-lg">
                <img src={product.image} alt={product.title} className="w-full h-72 object-cover" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold">{product.title}</h1>
                    <p className="mt-3 text-slate-600">{product.description}</p>
                    <div className="mt-6 flex items-center justify-between">
                        <span className="text-2xl font-semibold text-[#D4AF37]">{product.price}</span>
                        <button className="rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-slate-900">Buy Now</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductDetail
