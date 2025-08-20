'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const highlights = [
  {
    title: "Cutting-Edge Automation",
    description: "Our AI-driven machines optimize every stitch, reducing errors and boosting output.",
    image: "https://placehold.co/600x400.png",
    hint: "robot arm"
  },
  {
    title: "Sustainable Solutions",
    description: "We engineer for efficiency, minimizing fabric waste and energy consumption.",
    image: "https://placehold.co/600x400.png",
    hint: "green technology"
  },
  {
    title: "Global Support Network",
    description: "Our expert technicians are available 24/7 to support your operations worldwide.",
    image: "https://placehold.co/600x400.png",
    hint: "customer support"
  }
];

export function ServiceHighlights() {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            The Tex Method Advantage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We deliver more than just machinery; we provide comprehensive solutions that drive growth and innovation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    data-ai-hint={item.hint}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
