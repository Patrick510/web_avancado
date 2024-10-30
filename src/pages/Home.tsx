import Rodape from "@/components/Rodape";
import TodoItem from "@/components/TodoItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

export default function Home() {
  const [itens, setItens] = useState([] as string[]);

  function submeterFormulario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submetendo formulário:", e);
    const f = e.target as HTMLElement;
    const input = f.querySelector("input") as HTMLInputElement;
  }

  return (
    <div className="p-5 grid gap-3">
      <div>
        <h2>Menu</h2>
      </div>
      <Separator />
      <form onSubmit={(e) => submeterFormulario(e)}>
        <div className="flex w-full justify-center items-center gap-2">
          <Input type="text" placeholder="Escreva uma tarefa" />
          <Button type="submit">Adicionar</Button>
        </div>
      </form>
      <TodoItem name="Comprar pão" />
      <TodoItem name="Fazer trabalho de Algoritmos" />
      <TodoItem name="Paradalal alguma" />
      <TodoItem name="sLK FI alguma" />

      <Separator />
      <div>
        <Rodape />
      </div>
    </div>
  );
}
