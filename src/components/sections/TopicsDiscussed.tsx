'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, ShieldCheck, Zap, HeartHandshake, Cog, TrendingUp, Leaf, Award } from 'lucide-react';

const topics = [
  {
    icon: Cpu,
    title: "Advanced Technology",
    description: "Explore innovative features like automated stitching, precision controls, and digital system integration in our machines.",
  },
  {
    icon: ShieldCheck,
    title: "Industrial Durability",
    description: "Our machines are engineered to withstand demanding factory environments, ensuring long-term reliability and minimal downtime.",
  },
  {
    icon: Zap,
    title: "Enhancing Production Efficiency",
    description: "Streamline production processes, increase throughput, and reduce labor costs for ultimate manufacturing efficiency.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centric Service",
    description: "Exceptional after-sales support, including maintenance, troubleshooting, and training for smooth operations.",
  },
  {
    icon: Cog,
    title: "Tailored Solutions for Needs",
    description: "Customized sewing solutions for specific garment types, production volumes, and manufacturing requirements.",
  },
  {
    icon: TrendingUp,
    title: "Industry Trends & Future",
    description: "Staying ahead of the curve by continuously innovating and adapting our products to meet evolving industry demands.",
  },
  {
    icon: Leaf,
    title: "Sustainability in Manufacturing",
    description: "Eco-friendly processes, energy-efficient technologies, and efforts to minimize waste in garment production.",
  },
  {
    icon: Award,
    title: "Customer Success Stories",
    description: "Real-world examples of increased productivity and operational improvements from our valued partners.",
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
            Tex Method Company Ltd. is transforming garment manufacturing with advanced sewing machines built for industrial use. Your focus on innovation, reliability, and customer support ensures factories get both cutting-edge technology and seamless after-sales service. A true partner in boosting efficiency—revolutionizing the industry, one stitch at a time!
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <topic.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-2 text-lg">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
