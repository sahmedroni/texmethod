'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LifeBuoy, Wrench, Users, GraduationCap, Clock, Signal, Package, TrendingUp, Star, Handshake } from 'lucide-react';

const services = [
  { icon: Wrench, title: "Proactive Maintenance" },
  { icon: LifeBuoy, title: "Responsive Troubleshooting" },
  { icon: Users, title: "Personalized Customer Support" },
  { icon: GraduationCap, title: "Training and Skill Development" },
  { icon: Clock, title: "24/7 Technical Assistance" },
  { icon: Signal, title: "Remote Monitoring & Diagnostics" },
  { icon: Package, title: "Spare Parts Availability" },
  { icon: TrendingUp, title: "Continuous Improvement" },
  { icon: Star, title: "Customer Satisfaction Monitoring" },
  { icon: Handshake, title: "Partnerships for Enhanced Service" },
];

export function ServiceHighlights() {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Dedicated to Your Success: Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Our commitment doesn't end at delivery. We provide comprehensive after-sales service to ensure your operations run smoothly and efficiently, always.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {services.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-md font-semibold text-primary">{item.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
