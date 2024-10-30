import Rodape from "@/components/Rodape";
import TodoItem from "@/components/TodoItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="p-5 grid gap-3">
      <div>
        <h2>Menu</h2>
      </div>
      <Separator />
      <div className="flex w-full justify-center items-center gap-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Adicionar</Button>
      </div>
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
