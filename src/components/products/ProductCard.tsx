'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Download, ChevronsRight } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
    >
      <Card className="flex h-full flex-col overflow-hidden">
        <CardHeader>
          <div className="relative h-48 w-full overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={product.hint}
            />
          </div>
          <CardTitle className="pt-4">{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <h4 className="mb-2 font-semibold text-sm">Key Specifications:</h4>
          <Table>
            <TableBody>
              {product.specs.map((spec) => (
                <TableRow key={spec.name}>
                  <TableCell className="font-medium p-2">{spec.name}</TableCell>
                  <TableCell className="p-2">{spec.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-2 sm:flex-row sm:justify-between">
          <Button>
            Request Pricing <ChevronsRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" asChild>
            <a href="#" download>
              <Download className="mr-2 h-4 w-4" />
              PDF Brochure
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
