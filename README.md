# PhotoPoint Test — Каталог товаров

## Описание проекта

Тестовое задание на позицию Frontend Developer (React/Next.js).  
Веб-приложение "Каталог товаров" с реализацией клиентской корзины, фильтрацией и поиском.  
Проект выполнен с использованием современных инструментов и архитектуры App Router.

## Функциональность

- Загрузка списка товаров с FakeStore API
- Поиск по названию и фильтрация по категориям
- Корзина с управлением количеством и подсчетом общей стоимости
- Навигация между / (каталог) и /cart (корзина)
- Ленивое подключение компонентов (lazy loading через next/dynamic)
- SSR и разделение client/server компонентов (App Router)
- Стилизация с помощью Tailwind CSS
- Полная адаптация под мобильные устройства

## Технологии

- Next.js 13+ (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Context API
- FakeStore API
- Vercel (деплой)

## Инструкция по запуску

1. Клонируйте репозиторий:

```bash
git clone https://github.com/KriiU/photo-point-test
cd photo-point-test
npm install
npm run dev
Откройте в браузере: http://localhost:3000
