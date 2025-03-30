'use client'

// пустой список

export function EmptyApi() {
  return (
    <div className="text-center text-violet-600 py-20 px-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Товары не найдены</h2>
      <p className="text-gray-500 mb-4">
        Возможно, данные временно недоступны или список товаров пуст.
      </p>
      <button onClick={() => location.reload()} className="mt-2 inline-block rounded-full bg-violet-500 px-5 py-2 text-white text-sm font-medium shadow hover:bg-violet-600 transition" >
        Попробовать снова
      </button>
    </div>
  )
}

// ошибка при запроса

export function ErrorState() {
  return (
    <div className="text-center text-red-600 py-20 px-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Ошибка загрузки данных</h2>
      <p className="text-gray-500 mb-4">Попробуйте позже или обновите страницу.</p>
      <form action="">
        <button
          type="submit"
          className="mt-2 inline-block rounded-full bg-red-500 px-5 py-2 text-white text-sm font-medium shadow hover:bg-red-600 transition"
        >
          Обновить
        </button>
      </form>
    </div>
  )
}