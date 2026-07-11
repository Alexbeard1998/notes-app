import Link from 'next/link';
import { prisma } from './lib/prisma';

export default async function HomePage() {
  const notes = await prisma.note.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Мои заметки</h1>
        <Link
          href="/notes/new"
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Новая заметка
        </Link>
      </div>

      {notes.length === 0 ? (
        <p className="text-gray-400 text-center mt-20">
          Пока нет заметок. Создайте первую!
        </p>
      ) : (
        <ul className="space-y-3">
          {notes.map((note) => (
            <li key={note.id}>
              <Link
                href={`/notes/${note.id}`}
                className="block p-4 bg-gray-800 rounded-lg hover:ring-2 hover:ring-yellow-400 transition-all"
              >
                <h2 className="text-lg font-semibold truncate">{note.title}</h2>
                <p className="text-sm text-gray-400 mt-1">
                  {new Date(note.createdAt).toLocaleDateString('ru-RU')}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}