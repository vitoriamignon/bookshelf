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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.author}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {/* usar next/image para otimização de imagens */}
        {/* cover é uma URL (string) conforme app/lib/types.ts */}
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
        <div className="text-sm text-center">
          <p>
            **Ano:** {book.year}
          </p>
          <p>
            **Páginas:** {book.pages}
          </p>
          <p>
            **Gênero:** {book.genre}
          </p>
          <p>
            **Avaliação:** {book.rating} estrelas
          </p>
          <p className="mt-2 text-xs font-semibold uppercase">
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