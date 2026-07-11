'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createNote } from '@/app/lib/actions';

export default function NewNotePage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (formData: FormData) => {
    setError('');
    try {
      await createNote(formData);
      router.push('/');
    } catch (err) {
      setError((err as Error).message || 'Не удалось создать заметку');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Новая заметка</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg text-sm text-red-300">
          {error}
        </div>
      )}

      <form action={handleSubmit} className="space-y-4">
        {/* инпуты остаются те же */}
      </form>
    </div>
  );
}