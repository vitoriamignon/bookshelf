import { getBook } from "@/lib/actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { DeleteBookButton } from "./DeleteBookButton";

export default async function BookPage({ params }: { params: Promise<{ bookId: string }> }) {
  const { bookId } = await params;
  const book = await getBook(bookId);

  if (!book) {
    notFound();
  }

  const statusLabels = {
    'QUERO_LER': 'Quero Ler',
    'LENDO': 'Lendo',
    'LIDO': 'Lido',
    'PAUSADO': 'Pausado',
    'ABANDONADO': 'Abandonado'
  };

  const statusColors = {
    'QUERO_LER': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
    'LENDO': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
    'LIDO': 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300',
    'PAUSADO': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
    'ABANDONADO': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
  };

  return (
    <main className="container mx-auto py-10">
      <div className="mb-6">
        <Link 
          href="/library" 
          className="text-primary hover:text-primary/80 inline-flex items-center gap-2"
        >
          ← Voltar à biblioteca
        </Link>
      </div>

      <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Capa do livro */}
            <div className="col-span-1">
              <div className="w-full max-w-sm mx-auto">
                <div className="aspect-[2/3] relative bg-muted rounded-lg overflow-hidden">
                  {book.cover ? (
                    <Image
                      src={book.cover}
                      alt={`Capa de ${book.title}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📖</div>
                        <p className="text-sm">Sem capa</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Informações do livro */}
            <div className="col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-card-foreground mb-2">{book.title}</h1>
                <p className="text-xl text-muted-foreground mb-4">por {book.author}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    📅 {book.year}
                  </span>
                  <span className="flex items-center gap-1">
                    📄 {book.pages.toLocaleString()} páginas
                  </span>
                  <span className="flex items-center gap-1">
                    📚 {book.genre}
                  </span>
                  {book.rating > 0 && (
                    <span className="flex items-center gap-1">
                      ⭐ {book.rating}/5
                    </span>
                  )}
                </div>
              </div>

              <div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusColors[book.status]}`}>
                  {statusLabels[book.status]}
                </span>
              </div>

              {book.synopsis && (
                <div>
                  <h2 className="text-lg font-semibold text-card-foreground mb-3">Sinopse</h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {book.synopsis}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <Link
                  href={`/library/${book.id}/edit`}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  ✏️ Editar
                </Link>
                
                <DeleteBookButton bookId={book.id} bookTitle={book.title} />
                
                <Link
                  href="/library"
                  className="px-4 py-2 border border-border rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  📚 Ver biblioteca
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-card-foreground">{book.year}</div>
            <div className="text-sm text-muted-foreground">Ano de publicação</div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-card-foreground">{book.pages.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Páginas</div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-card-foreground">
              {book.rating > 0 ? `${book.rating}/5` : '--'}
            </div>
            <div className="text-sm text-muted-foreground">Avaliação</div>
          </div>
        </div>
      </div>
    </main>
  );
}
