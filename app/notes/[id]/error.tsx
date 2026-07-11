'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NoteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Ошибка заметки:', error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto p-4 text-center mt-20">
      <h2 className="text-2xl font-bold text-red-400">Не удалось загрузить заметку</h2>
      <p className="mt-2 text-gray-400">
        Возможно, заметка была удалена или произошла ошибка сервера.
      </p>
      <div className="flex gap-3 justify-center mt-4">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Попробовать снова
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}