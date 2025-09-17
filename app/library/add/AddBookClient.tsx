"use client";

import React from "react";
import { Book } from "@/lib/types";
import { BookForm } from "@/components/book-form";
import { addBook } from "@/lib/storage";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

export default function AddBookClient() {
  const router = useRouter();
  return (
    <BookForm
      onSubmit={(data) => {
        const book: Book = {
          id: uuidv4(),
          title: String(data.title ?? ""),
          author: String(data.author ?? ""),
          genre: String(data.genre ?? ""),
          pages: Number(data.pages ?? 0),
          year: Number(data.year ?? 0),
          rating: Number(data.rating ?? 0),
          synopsis: String(data.synopsis ?? ""),
          cover: String(data.cover ?? ""),
          status: (data.status as Book["status"]) ?? "QUERO_LER",
        };

        addBook(book);
        router.push("/library");
      }}
      onCancel={() => router.push("/library")}
    />
  );
}
