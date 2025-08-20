'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="bg-card">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative aspect-square h-full max-h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Team of engineers working on automated sewing machinery"
              fill
              className="object-cover"
              data-ai-hint="factory workers"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Decades of Innovation in Garment Technology
          </h2>
          <p className="text-lg text-muted-foreground">
            Tex Method is at the forefront of the apparel industry's technological evolution. From our headquarters in Dhaka, we design and manufacture state-of-the-art automated sewing machines that empower businesses worldwide to achieve unparalleled levels of efficiency and quality.
          </p>
          <p className="text-muted-foreground">
            Our mission is to build the future of garment production—a future that is smarter, faster, and more sustainable.
          </p>
          <Button asChild size="lg">
            <Link href="/about">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
