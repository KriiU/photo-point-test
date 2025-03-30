// home

import { getProducts } from '@/lib/api'
import HomePageClient from '@/components/HomePageClient'
import { EmptyApi, ErrorState } from '@/components/ErrorApi'

export default async function HomePage() {
  try {
    const products = await getProducts()

    if (!products || products.length === 0) {
      return <EmptyApi />
    }

    return <HomePageClient products={products} />

  } catch (error) {

    console.error('Ошибка загрузки товаров:', error)

    return <ErrorState />
  }
}

