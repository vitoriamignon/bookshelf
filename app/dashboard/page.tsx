import { initialBooks } from "@/lib/data";
import { Book } from "@/lib/types";
import Link from "next/link";

function statTotal(books: Book[]) {
  return books.length;
}

function statReading(books: Book[]) {
  return books.filter((b) => b.status === "LENDO").length;
}

function statRead(books: Book[]) {
  return books.filter((b) => b.status === "LIDO").length;
}

function statPages(books: Book[]) {
  return books.reduce((s, b) => s + (b.pages || 0), 0);
}

export default function DashboardPage() {
  const books = initialBooks;
  return (
    <main className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex gap-2">
          <Link href="/library" className="px-3 py-2 border rounded">Ver biblioteca</Link>
          <Link href="/library/add" className="px-3 py-2 bg-slate-800 text-white rounded">Adicionar livro</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow"> 
          <div className="text-sm text-gray-500">Total de livros</div>
          <div className="text-2xl font-bold">{statTotal(books)}</div>
        </div>
        <div className="p-4 bg-white rounded shadow"> 
          <div className="text-sm text-gray-500">Lendo agora</div>
          <div className="text-2xl font-bold">{statReading(books)}</div>
        </div>
        <div className="p-4 bg-white rounded shadow"> 
          <div className="text-sm text-gray-500">Lidos</div>
          <div className="text-2xl font-bold">{statRead(books)}</div>
        </div>
        <div className="p-4 bg-white rounded shadow"> 
          <div className="text-sm text-gray-500">Páginas lidas</div>
          <div className="text-2xl font-bold">{statPages(books)}</div>
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Bem-vindo ao BookShelf</h2>
        <p className="text-sm text-gray-600">Use o menu acima para navegar. Você pode começar adicionando um novo livro ou explorando sua biblioteca atual.</p>
      </div>
    </main>
  );
}
