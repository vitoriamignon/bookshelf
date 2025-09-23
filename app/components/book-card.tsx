"use client";

import { Book } from "@/lib/types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="w-[350px] dark:bg-[#1c406f] dark:border-blue-800">
      <CardHeader>
        <CardTitle className="dark:text-white">{book.title}</CardTitle>
        <CardDescription className="dark:text-gray-300">{book.author}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="h-48 w-32 relative rounded-md overflow-hidden mb-4">
          <Image
            src={book.cover}
            alt={`Capa de ${book.title}`}
            fill
            sizes="(max-width: 768px) 128px, 192px"
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>
        <div className="text-sm text-center dark:text-gray-300">
          <p>
            <b>Ano:</b> {book.year}
          </p>
          <p>
            <b>Páginas:</b> {book.pages}
          </p>
          <p>
            <b>Gênero:</b> {book.genre}
          </p>
          <p>
            <b>Avaliação:</b> {book.rating} estrelas
          </p>
          <p className="mt-2 text-xs font-semibold uppercase dark:text-white">
            {book.status}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <Button variant="outline">Detalhes</Button>
        <Button>Editar</Button>
        <Button variant="destructive">Excluir</Button>
      </CardFooter>
    </Card>
  );
}