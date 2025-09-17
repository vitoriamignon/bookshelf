// app/library/[bookId]/page.tsx
export default function BookPage({ params: { bookId } }: { params: { bookId: string } }) {
	return (
		<main className="container mx-auto py-10">
			<h1 className="text-2xl font-bold">Livro {bookId}</h1>
			<p>Detalhes do livro serão exibidos aqui.</p>
		</main>
	);
}
