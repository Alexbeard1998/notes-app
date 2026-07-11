# Notes App

A modern, full-featured CRUD application for managing notes, built with Next.js (App Router). This project demonstrates efficient server-side data mutations, production-grade error handling, and polished user experience optimization.

## 🚀 Key Features & Architecture

* **Full CRUD Operations:** Seamlessly Create, Read, Update, and Delete notes.
* **Next.js Server Actions:** Secure and efficient data mutations performed directly on the server without traditional API layers.
* **Optimized Async UX:** Implements React's `useTransition` hook to provide instant pending states and loading indicators during mutations (e.g., deletion).
* **Resilient UX & Error Handling:** 
  * Native `loading.tsx` integration with dynamic skeleton screens for smooth navigation.
  * Robust `error.tsx` handling featuring an interactive recovery/reset button.
  * Personalized `not-found.tsx` layout for custom 404 pages.
* **SEO & Metadata:** Dynamic page titles and optimized SEO metadata tailored for every specific route.

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript / JavaScript
* **State & Mutations:** React Server Actions, `useTransition`
* **Styling:**  Tailwind CSS
* **Database/Storage:** PostgreSQL

# Notes App (Приложение для заметок)

Современное полнофункциональное CRUD-приложение для управления заметками, разработанное на базе Next.js (App Router). Проект демонстрирует лучшие практики серверных мутаций данных, коммерческий подход к обработке ошибок и оптимизацию пользовательского опыта.

## 🚀 Ключевой функционал и архитектура

* **Полный CRUD-цикл:** Бесшовное создание, просмотр списка, редактирование (с предзаполнением форм) и безопасное удаление заметок.
* **Next.js Server Actions:** Безопасная мутация данных напрямую на сервере без необходимости написания традиционных API-эндпоинтов.
* **Плавный UX для асинхронных операций:** Использование хука `useTransition` для мгновенной индикации состояний загрузки во время удаления и сохранения заметок.
* **Отказоустойчивость интерфейса:**
  * Нативная интеграция `loading.tsx` со скелетонами для плавной навигации между страницами.
  * Изоляция и обработка непредвиденных сбоев через `error.tsx` с кнопкой сброса (reset).
  * Кастомная страница `not-found.tsx` для понятной обработки 404-ошибок.
* **SEO и метаданные:** Динамическая генерация метатегов и уникальных заголовков для каждой страницы приложения.

## 🛠️ Стек технологий

* **Фреймворк:** Next.js (App Router)
* **Язык:** TypeScript / JavaScript
* **Управление данными:** React Server Actions, `useTransition`
* **Стилизация:**  Tailwind CSS 
* **База данных/Хранилище:** PostgreSQL