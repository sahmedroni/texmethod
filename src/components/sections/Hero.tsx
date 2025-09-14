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
        src="https://drive.google.com/uc?export=download&id=1IpyBJTpx1lZmvSuq0YIZrJPBsGksQ63F"
        alt="Automated sewing machines in a modern garment factory"
        fill
        className="object-cover"
        priority
        data-ai-hint="sewing factory"
      />
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto max-w-7xl px-4 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Tex Method Company Ltd.
            </h1>
            <h2 className="mt-2 text-xl leading-8 text-primary-foreground">
              Helping You to grow your Business
            </h2>
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
