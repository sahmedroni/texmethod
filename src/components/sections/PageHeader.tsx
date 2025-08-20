'use client';

import { motion } from 'framer-motion';

type PageHeaderProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="bg-card py-16 text-center md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto max-w-4xl px-4"
      >
        <p className="font-semibold uppercase tracking-wider text-accent">{subtitle}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
