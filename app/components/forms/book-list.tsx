
"use client";

import { useState, useMemo } from "react";
import { Book } from "@/lib/types";
import { BookCard } from "../book-card";
import { Input } from "../ui/input";


interface BookListProps {
  initialBooks: Book[];
}

export function BookList({ initialBooks }: BookListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("all");

  const genres = useMemo(
    () => [
      "all",
      ...new Set(initialBooks.map((book) => book.genre)),
    ],
    [initialBooks]
  );

  const filteredBooks = useMemo(() => {
    return initialBooks.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre =
        filterGenre === "all" || book.genre === filterGenre;
      return matchesSearch && matchesGenre;
    });
  }, [initialBooks, searchTerm, filterGenre]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-2xl">
        <Input
          type="text"
          placeholder="Buscar por título ou autor..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        <div className="w-full sm:w-[180px]">
          <select
            className="w-full border rounded px-3 py-2"
            value={filterGenre}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilterGenre(e.target.value)}
          >
            <option value="all">Todos os Gêneros</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Nenhum livro encontrado.</p>
        )}
      </div>
    </div>
  );
}