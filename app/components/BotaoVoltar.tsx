"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BotaoVoltar() {
  return (
    <Button 
      asChild 
      variant="outline" 
      className="mb-8 font-bold border-2"
    >
      <Link href="/">
        Voltar
      </Link>
    </Button>
  );
}