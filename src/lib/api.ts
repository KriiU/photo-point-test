import { Product } from '@/types/product'

export async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 }
  })

  const contentType = res.headers.get('content-type') || ''
  if (!res.ok || !contentType.includes('application/json')) {
    throw new Error(`Ошибка загрузки: ${res.status}, тип: ${contentType}`)
  }

  return res.json()
}
