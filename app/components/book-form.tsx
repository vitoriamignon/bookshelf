"use client";

import React, { useState } from "react";
import { Book } from "@/lib/types";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
  initial?: Partial<Book>;
  onSubmit?: (data: Partial<Book>) => void;
  onCancel?: () => void;
};

export function BookForm({ initial = {}, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<Partial<Book>>({ ...initial });


  return (
    <div className="bg-white p-6 rounded shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="w-48 h-60 mb-4 relative">
            {form.cover ? (
              <Image src={form.cover} alt={String(form.title ?? "Capa")} fill style={{ objectFit: "cover" }} />
            ) : (
              <div className="bg-gray-100 w-full h-full flex items-center justify-center">Preview</div>
            )}
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <Input value={form.title ?? ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(p => ({ ...p, title: e.target.value }))} placeholder="Título" />
            <Input value={form.author ?? ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(p => ({ ...p, author: e.target.value }))} placeholder="Autor" />
            <Input value={String(form.pages ?? "")} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(p => ({ ...p, pages: Number(e.target.value) }))} placeholder="Total de páginas" />
            <Input value={String(form.year ?? "")} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(p => ({ ...p, year: Number(e.target.value) }))} placeholder="Ano" />
            <Input value={form.genre ?? ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(p => ({ ...p, genre: e.target.value }))} placeholder="Gênero" />
            <Input value={form.cover ?? ""} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(p => ({ ...p, cover: e.target.value }))} placeholder="URL da capa" />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => onCancel?.()}>Cancelar</Button>
            <Button onClick={() => onSubmit?.(form)}>Salvar Alterações</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
