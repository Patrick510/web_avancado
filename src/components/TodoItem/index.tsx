import { Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

export default function TodoItem({
  name,
  remover,
}: {
  name: string;
  remover: () => void;
}) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div
      className={`flex items-center justify-between p-3 border rounded-lg shadow-sm ${
        checked ? "bg-gray-50" : "bg-gray-100"
      }`}
    >
      <h3 className="flex items-center gap-2">
        <Checkbox
          className="border border-gray-300 h-5 w-5"
          onClick={handleCheck}
        />{" "}
        {name}
      </h3>
      <Button variant={"outline"} onClick={remover}>
        <Trash2Icon />
      </Button>
    </div>
  );
}
