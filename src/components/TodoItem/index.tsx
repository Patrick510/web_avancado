import { Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";

export default function TodoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg shadow-sm">
      <h3>{name}</h3>
      <Button variant={"outline"}>
        <Trash2Icon />
      </Button>
    </div>
  );
}
