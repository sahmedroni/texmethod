'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  { year: "2015", title: "Company Founded", description: "Tex Method was established in Dhaka with a vision to revolutionize the local garment industry." },
  { year: "2017", title: "First Automated Machine", description: "Launched our first proprietary automated straight stitch machine, increasing client productivity by 40%." },
  { year: "2019", title: "International Expansion", description: "Began exporting to Southeast Asia, marking our first step into the global market." },
  { year: "2021", title: "R&D Center Launch", description: "Opened a dedicated research and development center to focus on AI and sustainable manufacturing." },
  { year: "2023", title: "Smart Factory Solution", description: "Introduced a fully integrated smart factory solution, connecting all stages of production." },
];

export function Timeline() {
  return (
    <div className="relative">
      {/* The vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true" />

      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            {/* Timeline content */}
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
              <div className="rounded-lg bg-card p-4 shadow-md">
                <p className="text-lg font-bold text-primary">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </div>
            
            {/* The circle and year */}
            <div className="absolute left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-bold">{event.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
