import { prisma } from '@/app/lib/prisma';
import { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
export const metadata: Metadata = {
  title: 'Новая заметка — Менеджер заметок',
  description: 'Создайте новую заметку',
};


async function createNote(formData: FormData) {
  'use server';

  // Извлекаем данные из формы по атрибуту name
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  // Создаём запись в базе данных
  await prisma.note.create({
    data: {
      title,
      content,
    },
  });

  // Перенаправляем на главную страницу
  redirect('/');
}

export default function NewNotePage() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Новая заметка</h1>
      <form action={createNote} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Заголовок
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Введите заголовок"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Содержимое
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={10}
            placeholder="Введите текст заметки"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Сохранить
          </button>
          <Link
            href="/"
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Отмена
          </Link>
        </div>
      </form>
    </div>
  );
}