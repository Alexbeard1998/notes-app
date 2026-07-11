import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import { Metadata } from "next";

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
    title: `Редактирование: ${note.title} — Менеджер заметок`,
  };
}


async function updateNote(id: string, formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.note.update({
    where: { id },
    data: {
      title,
      content,
    },
  });
  redirect(`/notes/${id}`);
}

export default async function EditNotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = await prisma.note.findUnique({ where: { id } });
  if (!note) {
    notFound();
  }
  const updateNoteWithId = updateNote.bind(null, id);
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Редактирование заметки</h1>

      <form action={updateNoteWithId} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Заголовок
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            defaultValue={note.title}
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
            defaultValue={note.content}
            placeholder="Введите текст заметки"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            Сохранить изменения
          </button>
          <Link
            href={`/notes/${id}`}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Отмена
          </Link>
        </div>
      </form>
    </div>
  );
}
