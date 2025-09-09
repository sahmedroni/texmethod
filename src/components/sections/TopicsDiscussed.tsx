'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Wrench, Package, Cpu } from 'lucide-react';

const topics = [
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Integrating AI and IoT for intelligent, self-optimizing production lines that reduce downtime and improve output.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description: "Strategies for proactive machinery care to ensure longevity and peak performance, minimizing unexpected breakdowns.",
  },
  {
    icon: Lightbulb,
    title: "Sustainable Manufacturing",
    description: "Exploring eco-friendly technologies and processes that reduce waste, conserve energy, and promote a greener future.",
  },
  {
    icon: Package,
    title: "Supply Chain Integration",
    description: "How connected machinery can streamline your supply chain, from raw materials to finished product.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function TopicsDiscussed() {
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
            Topics We Discuss
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We delve into the key areas that are shaping the future of garment manufacturing technology.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <topic.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
