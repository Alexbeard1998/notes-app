import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto p-4 text-center mt-20">
      <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Страница не найдена</h2>
      <p className="text-gray-400 mb-6">
        Возможно, заметка была удалена или вы перешли по неверной ссылке.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors inline-block"
      >
        На главную
      </Link>
    </div>
  );
}