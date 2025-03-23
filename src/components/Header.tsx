// header

'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const pathname = usePathname()
  const { cart } = useCart()
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="bg-purple-50 border-b border-violet-100 shadow-[0_2px_6px_rgba(216,180,254,0.1)] sticky top-0 z-50 backdrop-blur-sm">

      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-extrabold text-fuchsia-600 tracking-wide hover:text-fuchsia-700 transition">
          PhotoPoint
        </Link>

        <nav className="flex gap-6 items-center font-medium text-sm">
          <Link href="/" className={`transition hover:text-fuchsia-600 ${pathname === '/' ? 'text-fuchsia-600 underline' : 'text-violet-700'}`} >
            Каталог
          </Link>

          <Link href="/cart" className="relative transition hover:text-fuchsia-600 text-violet-700"
          >
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-fuchsia-500 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 shadow-md">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
