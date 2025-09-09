'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Automated sewing machines in a modern garment factory"
        fill
        className="object-cover"
        priority
        data-ai-hint="sewing factory"
      />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto max-w-7xl px-4 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Tex Method Company Ltd.
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
              Tex Method delivers cutting-edge automated sewing solutions that redefine speed, precision, and efficiency for the global apparel industry.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/products">
                  Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
