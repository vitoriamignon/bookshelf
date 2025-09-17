import EditBookClient from "./EditBookClient";

export default function EditBookPage({ params }: { params: { bookId: string } }) {
  const { bookId } = params;
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-2xl font-bold">Editar livro</h1>
  {/* Client component will load from localStorage */}
  <EditBookClient bookId={bookId} />
    </main>
  );
}
