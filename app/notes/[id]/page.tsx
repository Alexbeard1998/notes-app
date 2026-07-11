import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';
import { prisma } from "@/app/lib/prisma";
import DeleteButton from "@/app/components/DeleteButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const note = await prisma.note.findUnique({ where: { id } });

  if (!note) {
    return { title: 'Заметка не найдена' };
  }

  return {
    title: `${note.title} — Менеджер заметок`,
    description: note.content.slice(0, 160), // Первые 160 символов для описания
       // Open Graph — для соцсетей и мессенджеров
    openGraph: {
      title: note.title,
      description: note.content.slice(0, 160),
      type: 'article',
      // locale: 'ru_RU',
      // images: '/og-image.jpg', // можно добавить свою картинку
    },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Ищем заметку по id. findUnique ищет по уникальному полю.
  const note = await prisma.note.findUnique({
    where: { id: id },
  });

  // Если заметка не найдена — показываем страницу 404
  if (!note) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Link
        href="/"
        className="text-blue-400 hover:underline text-sm mb-4 inline-block"
      >
        ← Назад к списку
      </Link>

      <div className="flex justify-between items-start mb-4">
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <div className="flex gap-2 shrink-0">
          <Link
            href={`/notes/${note.id}/edit`}
            className="px-4 py-2 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition-colors text-sm whitespace-nowrap"
          >
            ✏️ Редактировать
          </Link>
          <DeleteButton id={note.id} />
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-6">
        Создано: {new Date(note.createdAt).toLocaleDateString("ru-RU")}
      </p>

      <div className="bg-gray-800 rounded-lg p-4 whitespace-pre-wrap">
        {note.content}
      </div>
    </div>
  );
}
