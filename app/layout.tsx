import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Менеджер заметок',
  description: 'Приложение для создания и управления заметками',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        <header className="border-b border-gray-800 p-4">
          <nav className="max-w-2xl mx-auto">
            <Link
              href="/"
              className="font-bold text-xl hover:text-yellow-400 transition-colors"
            >
              📝 Заметки
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}