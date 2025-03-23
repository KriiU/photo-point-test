// home client

'use client'

import { useState } from 'react';
import { Product } from '@/types/product';
import dynamic from 'next/dynamic';
import SkeletonCard from './SkeletonCard';

const ProductCard = dynamic(() => import('./ProductCard'), {
  loading: () => <SkeletonCard />,
})

export default function HomePageClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...new Set(products.map((p) => p.category))]

  const filtered = products.filter((product) => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchSearch = product.title.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="p-4 sm:p-6 lg:p-10">

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
        {/* поиск */}
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск товаров..."
          className="w-full sm:w-1/2 px-4 py-2 rounded-full border border-violet-200 bg-white text-purple-800 placeholder:text-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300 transition" />

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full sm:w-1/3 px-4 py-2 rounded-full border border-violet-200 bg-white text-purple-800 focus:outline-none focus:ring-2 focus:ring-violet-300 transition"  >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'Все категории' : cat}
            </option>
          ))}
        </select>
      </div>
      {/* фильтрация */}
      {filtered.length === 0 ? (
        <div className="text-center text-violet-500 text-lg bg-purple-50 border border-violet-100 rounded-xl py-10 px-6 shadow-sm">
          Ничего не найдено 😢
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}
