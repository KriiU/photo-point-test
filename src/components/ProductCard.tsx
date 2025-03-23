// card product

'use client'

import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { cart, addToCart, decreaseQuantity } = useCart()
  const itemInCart = cart.find((item) => item.id === product.id)
  const quantity = itemInCart?.quantity ?? 0

  const handleAdd = () => addToCart(product)
  const handleRemove = () => decreaseQuantity(product.id)

  return (
    <div className="relative group flex flex-col overflow-hidden rounded-3xl border border-violet-100 bg-purple-50 shadow-[0_4px_16px_rgba(216,180,254,0.2)] hover:shadow-[0_6px_24px_rgba(216,180,254,0.35)] transition-all duration-300">

      <div className="relative aspect-[4/3] bg-white overflow-hidden">
        <Image src={product.image} alt={product.title} fill className="object-contain p-4 transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>

      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-base font-semibold text-purple-800 mb-1 line-clamp-2">{product.title}</h3>
        <p className="text-sm text-violet-500 mb-1 capitalize">{product.category}</p>
        <p className="text-lg font-bold text-fuchsia-600 mb-4">${product.price}</p>

        <div className="mt-auto">
          {quantity > 0 ? (
            <div className="flex items-center justify-between rounded-xl border border-fuchsia-300 bg-fuchsia-50 px-3 py-1">
              <button onClick={handleRemove} className="px-3 text-lg font-bold text-fuchsia-500 hover:text-fuchsia-600" aria-label="Уменьшить количество"  >
                −
              </button>

              <span className="text-sm font-medium text-fuchsia-800">
                В корзине: <span className="font-semibold">{quantity}</span>
              </span>

              <button onClick={handleAdd} className="px-3 text-lg font-bold text-fuchsia-500 hover:text-fuchsia-600"
                aria-label="Увеличить количество" >
                +
              </button>
            </div>
          ) : (
            <button onClick={handleAdd} className="w-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500 py-2 text-sm font-medium text-white transition hover:brightness-110 shadow hover:shadow-md" >
              Добавить в корзину
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
