import { BookCard } from "@/components/book-card";
import  initialBooks  from "@/lib/data";

export default function LibraryPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Minha Biblioteca</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {initialBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}