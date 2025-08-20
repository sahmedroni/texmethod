'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: "Auto-Stitch Pro X",
    description: "High-speed, AI-powered straight stitch machine for unparalleled precision.",
    image: "https://placehold.co/600x400.png",
    hint: "sewing machine"
  },
  {
    name: "Tex-Overlock 5000",
    description: "Robust 5-thread overlock with automated fabric sensing for perfect seams.",
    image: "https://placehold.co/600x400.png",
    hint: "industrial machine"
  },
  {
    name: "Pattern Master-E",
    description: "Electronically controlled pattern sewer for complex and decorative designs.",
    image: "https://placehold.co/600x400.png",
    hint: "textile machinery"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function FeaturedProducts() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Our Featured Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Explore our cutting-edge solutions designed to elevate your manufacturing process to the next level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            >
              <Card className="flex h-full flex-col overflow-hidden">
                <CardHeader>
                  <div className="relative h-56 w-full overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      data-ai-hint={product.hint}
                    />
                  </div>
                  <CardTitle className="pt-4">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="text-accent hover:text-accent">
                    <Link href="/products">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
