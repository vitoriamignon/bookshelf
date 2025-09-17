
import { BookList } from "@/components/book-list";
import { initialBooks } from "@/lib/data";

export default function LibraryPage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Minha Biblioteca</h1>
      <BookList initialBooks={initialBooks} />
    </main>
  );
}