import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-accent">
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="mt-4 text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col">
        <p className="text-center text-muted-foreground">{description}</p>
        <ul className="mt-6 flex-grow space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-accent" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
