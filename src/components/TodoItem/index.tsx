import { Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export default function TodoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg shadow-sm bg-gray-50">
      <h3 className="flex items-center gap-2">
        <Checkbox /> {name}
      </h3>
      <Button variant={"outline"}>
        <Trash2Icon />
      </Button>
    </div>
  );
}
