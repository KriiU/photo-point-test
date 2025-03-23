import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: 'Каталог товаров | PhotoPoint',
  description: 'Тестовое задание — каталог с корзиной',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <CartProvider>
        <Header />
        <main className="flex-grow max-w-screen-xl mx-auto w-full">{children}</main>
        <footer className="text-center text-xs text-gray-500 py-6">
          © {new Date().getFullYear()} PhotoPoint. Тестовое задание.
        </footer>
        </CartProvider>
      </body>
    </html>
  )
}
