"use client";

import React, { useEffect, useState } from "react";
import { BookForm } from "@/components/book-form";
import { getBookById, updateBook } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { Book } from "@/lib/types";

export default function EditBookClient({ bookId }: { bookId: string }) {
  const [book, setBook] = useState<Book | null>(null);
  const router = useRouter();

  useEffect(() => {
    const b = getBookById(bookId);
    setBook(b ?? null);
  }, [bookId]);

  if (!book) return <div>Carregando...</div>;

  return (
    <BookForm
      initial={book}
      onSubmit={(data) => {
        const updated: Book = {
          ...book,
          title: String(data.title ?? book.title),
          author: String(data.author ?? book.author),
          genre: String(data.genre ?? book.genre),
          pages: Number(data.pages ?? book.pages),
          year: Number(data.year ?? book.year),
          rating: Number(data.rating ?? book.rating),
          synopsis: String(data.synopsis ?? book.synopsis),
          cover: String(data.cover ?? book.cover),
          status: (data.status as Book["status"]) ?? book.status,
        };

        updateBook(updated);
        router.push(`/library/${bookId}`);
      }}
      onCancel={() => router.push(`/library/${bookId}`)}
    />
  );
}
