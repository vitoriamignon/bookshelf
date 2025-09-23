import { initialBooks } from "@/lib/data";
import { Book } from "@/lib/types";
import Link from "next/link";
import { Navigation } from "@/components/navigation";

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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
          <div className="flex gap-2">
            <Link 
              href="/library" 
              className="px-3 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Ver biblioteca
            </Link>
            <Link 
              href="/library/add" 
              className="px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Adicionar livro
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-card border border-border rounded-lg shadow-sm"> 
            <div className="text-sm text-muted-foreground">Total de livros</div>
            <div className="text-2xl font-bold text-card-foreground">{statTotal(books)}</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg shadow-sm"> 
            <div className="text-sm text-muted-foreground">Lendo agora</div>
            <div className="text-2xl font-bold text-card-foreground">{statReading(books)}</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg shadow-sm"> 
            <div className="text-sm text-muted-foreground">Lidos</div>
            <div className="text-2xl font-bold text-card-foreground">{statRead(books)}</div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg shadow-sm"> 
            <div className="text-sm text-muted-foreground">Páginas lidas</div>
            <div className="text-2xl font-bold text-card-foreground">{statPages(books)}</div>
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2 text-card-foreground">Bem-vindo ao BookShelf</h2>
          <p className="text-sm text-muted-foreground">Use o menu acima para navegar. Você pode começar adicionando um novo livro ou explorando sua biblioteca atual.</p>
        </div>
      </main>
    </div>
  );
}
