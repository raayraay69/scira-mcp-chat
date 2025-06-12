"use client";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "./ui/select";
import { useMCP } from "@/lib/context/mcp-context";
import { MODES } from "@/lib/modes";
import { cn } from "@/lib/utils";

export function ModePicker({ className }: { className?: string }) {
  const { mode, setMode } = useMCP();

  return (
    <Select value={mode} onValueChange={setMode}>
      <SelectTrigger className={cn("h-6 w-24", className)}>
        <SelectValue placeholder="Mode" />
      </SelectTrigger>
      <SelectContent>
        {MODES.map(m => (
          <SelectItem key={m.id} value={m.id}>
            {m.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
