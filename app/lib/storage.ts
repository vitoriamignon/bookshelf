// app/lib/storage.ts
import { Book } from "./types";
import { initialBooks } from "./data";

const KEY = "bookshelf_books_v1";

export function getBooksFromStorage(): Book[] {
  if (typeof window === "undefined") return initialBooks;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) {
      localStorage.setItem(KEY, JSON.stringify(initialBooks));
      return initialBooks;
    }
    return JSON.parse(raw) as Book[];
  } catch (e) {
    console.error("storage read error", e);
    return initialBooks;
  }
}

export function saveBooksToStorage(books: Book[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(books));
  } catch (e) {
    console.error("storage write error", e);
  }
}

export function getBookById(id: string): Book | undefined {
  return getBooksFromStorage().find((b) => b.id === id);
}

export function addBook(book: Book) {
  const books = getBooksFromStorage();
  books.unshift(book);
  saveBooksToStorage(books);
}

export function updateBook(updated: Book) {
  const books = getBooksFromStorage();
  const idx = books.findIndex((b) => b.id === updated.id);
  if (idx !== -1) {
    books[idx] = updated;
    saveBooksToStorage(books);
  }
}
