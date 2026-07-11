'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Глобальная ошибка:', error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto p-4 text-center mt-20">
      <h2 className="text-2xl font-bold text-red-400">Что-то пошло не так!</h2>
      <p className="mt-2 text-gray-400">
        {error.message || 'Не удалось загрузить данные.'}
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Попробовать снова
      </button>
    </div>
  );
}