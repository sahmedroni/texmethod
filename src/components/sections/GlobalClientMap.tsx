'use client';

import { motion } from 'framer-motion';

const clientLocations = [
  { name: 'Bangladesh', x: '63%', y: '47%' },
  { name: 'Vietnam', x: '70%', y: '52%' },
  { name: 'Turkey', x: '49%', y: '39%' },
  { name: 'India', x: '59%', y: '48%' },
  { name: 'China', x: '72%', y: '40%' },
  { name: 'USA', x: '25%', y: '38%' },
  { name: 'Brazil', x: '38%', y: '68%' },
];

export function GlobalClientMap() {
  return (
    <section>
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Our Global Reach</h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          We power garment manufacturers across the globe, delivering innovative solutions to key textile markets.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mt-12"
        >
          <svg viewBox="0 0 1000 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Simple World Map SVG Path - Replace with a more detailed one if needed */}
            <path d="M500 0 C 223 0 0 223 0 500 H 1000 C 1000 223 777 0 500 0 Z M 200 200 L 250 150 L 300 200 L 250 250 Z M 400 300 L 450 250 L 500 300 L 450 350 Z M 600 100 L 650 50 L 700 100 L 650 150 Z" fill="#D1D5DB" transform="scale(1, 0.7) translate(0, 100)" />
            <path d="M499.999 499.782C223.858 499.782 0 387.97 0 249.891C0 111.812 223.858 0 499.999 0C776.141 0 1000 111.812 1000 249.891C1000 387.97 776.141 499.782 499.999 499.782ZM486.642 26.6219C418.349 71.916 384.202 143.203 384.202 220.482C384.202 297.76 418.349 369.048 486.642 414.342C296.223 403.496 150.936 333.684 150.936 249.891C150.936 166.098 296.223 96.2859 486.642 85.4402V26.6219ZM513.357 26.6219V85.4402C703.776 96.2859 849.062 166.098 849.062 249.891C849.062 333.684 703.776 403.496 513.357 414.342C581.65 369.048 615.797 297.76 615.797 220.482C615.797 143.203 581.65 71.916 513.357 26.6219Z" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1"/>
            <g fill="hsl(var(--foreground))" opacity="0.5">
              <path d="m537 175-1-2h-1l-1 2-1 1h4z"/>
              {/* Add more simplified country paths here */}
            </g>

            {clientLocations.map((loc, index) => (
              <g key={index}>
                <motion.circle
                  cx={loc.x}
                  cy={loc.y}
                  r="10"
                  fill="hsla(var(--accent), 0.3)"
                  initial={{ r: 0 }}
                  animate={{ r: 10 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
                <motion.circle
                  cx={loc.x}
                  cy={loc.y}
                  r="4"
                  fill="hsl(var(--accent))"
                  stroke="hsl(var(--background))"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                />
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
