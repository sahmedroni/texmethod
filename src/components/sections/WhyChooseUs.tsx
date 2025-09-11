'use client';

import { Zap, Target, Globe, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Zap,
    title: "Automation",
    description: "Boost your production speed and consistency with our state-of-the-art automated systems.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Achieve flawless quality with machinery engineered for sub-millimeter accuracy.",
  },
  {
    icon: Globe,
    title: "Global Clients",
    description: "Join a network of leading manufacturers worldwide who trust Tex Method for their production needs.",
  },
  {
    icon: LifeBuoy,
    title: "After-Sales Support",
    description: "Rely on our dedicated support team for maintenance, training, and assistance anytime, anywhere.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const iconColors = [
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-green-500/10 text-green-600",
  "bg-blue-500/10 text-blue-600",
];

export function WhyChooseUs() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Why Choose Tex Method?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our technology and commitment to excellence set us apart. We provide the tools you need to succeed in a competitive market.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="text-center"
            >
              <div className={cn(
                "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full",
                iconColors[index % iconColors.length]
              )}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
