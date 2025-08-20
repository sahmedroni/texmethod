'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl px-4 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to Automate Your Production Line?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Let's discuss how Tex Method can help you increase efficiency, reduce costs, and improve quality. Contact us today for a personalized consultation and quote.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">
            Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
