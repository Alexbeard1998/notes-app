"use client";
import { useTransition } from "react";
import { deleteNote } from "../lib/actions";

export default function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  const handleDelete = async () => {
    const confirmed = confirm("Вы уверены, что хотите удалить эту заметку?");
    if (!confirmed) return;
    startTransition(async () => {
      await deleteNote(id);
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className={`px-4 py-2 rounded-lg transition-colors text-sm whitespace-nowrap ${
        isPending
          ? "bg-gray-600 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700"
      }`}
    >
      {isPending ? "Удаление..." : "🗑️ Удалить"}
    </button>
  );
}
