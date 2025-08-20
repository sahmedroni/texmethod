'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  { src: "https://placehold.co/150x60.png", alt: "Client Brand 1", hint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Client Brand 2", hint: "brand logo" },
  { src: "https://placehold.co/150x60.png", alt: "Client Brand 3", hint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Client Brand 4", hint: "brand logo" },
  { src: "https://placehold.co/150x60.png", alt: "Client Brand 5", hint: "company logo" },
  { src: "https://placehold.co/150x60.png", alt: "Client Brand 6", hint: "brand logo" },
];

export function ClientLogos() {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          Trusted by Global Leaders
        </h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={60}
                className="opacity-60 transition-opacity duration-300 hover:opacity-100"
                data-ai-hint={logo.hint}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
