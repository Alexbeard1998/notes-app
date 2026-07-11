'use server'

import { redirect } from "next/navigation";
import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

export async function createNote(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await prisma.note.create({
    data: { title, content },
  });

  redirect('/');
}

export async function deleteNote(id: string) {
  await prisma.note.delete({
    where: { id },
  });

  // Сбрасываем кэш главной страницы, чтобы список обновился
  revalidatePath('/');
  
  // Возвращаем пользователя на главную
  redirect('/');
}