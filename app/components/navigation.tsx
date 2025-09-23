import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-bold">
            📚 BookShelf
          </Link>
          <div className="flex space-x-4">
            <Link 
              href="/dashboard" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              href="/library" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Biblioteca
            </Link>
            <Link 
              href="/library/add" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Adicionar Livro
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}