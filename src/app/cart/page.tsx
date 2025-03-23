//cart

'use client'

import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Моя корзина </h1>

      {cart.length === 0 ? (
        <p className="text-center text-violet-500 text-lg">Корзина пуста. Добавьте что-нибудь красивое 🌸</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li key={item.id}  className="flex items-center justify-between bg-purple-50 border border-violet-100 rounded-2xl shadow-[0_4px_16px_rgba(216,180,254,0.15)] px-4 py-4"  >
                <div className="flex gap-4 items-center w-full">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white">
                    <Image src={item.image} alt={item.title} fill className="object-contain p-2" sizes="(max-width: 768px) 100vw, 20vw" />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-sm font-semibold text-purple-800">{item.title}</h3>
                    <p className="text-fuchsia-600 font-bold text-sm">${item.price}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => decreaseQuantity(item.id)} className="px-3 text-lg font-bold text-fuchsia-500 hover:text-fuchsia-600 transition" aria-label="Уменьшить" >
                        −
                      </button>
                      <span className="text-sm text-fuchsia-700 font-medium">{item.quantity}</span>
                      <button onClick={() => addToCart(item)} className="px-3 text-lg font-bold text-fuchsia-500 hover:text-fuchsia-600 transition" aria-label="Увеличить" >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-sm text-rose-500 hover:underline" >
                  Удалить
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-xl font-semibold text-purple-800">
              Общая сумма: <span className="text-fuchsia-600 font-bold">${total}</span>
            </p>
            <button onClick={clearCart} className="rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white px-6 py-2 text-sm font-medium shadow hover:brightness-110 transition" >
              Очистить корзину
            </button>
          </div>
        </>
      )}
    </div>
  )
}
