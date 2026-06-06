import { Link } from 'react-router-dom'
import type { FC } from 'react'

type Props = {
    id: number
    title: string
    price: string
    image: string
    description?: string
}

const ProductCard: FC<Props> = ({ id, title, price, image, description }) => {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md">
            <img src={image} alt={title} className="h-44 w-full object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-[#D4AF37]">{price}</span>
                    <Link to={`/product/${id}`} className="rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-slate-900">
                        View
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default ProductCard
