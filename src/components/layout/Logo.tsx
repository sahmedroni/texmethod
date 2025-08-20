import { Scissors } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Scissors className="h-6 w-6 text-accent" />
      <span className="text-xl font-bold text-primary">Tex Method</span>
    </div>
  );
}
