import type { Metadata } from "next";
import { Wrench, School, ShieldCheck } from "lucide-react";

import { PageHeader } from "@/components/sections/PageHeader";
import { ServiceCard } from "@/components/services/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | Tex Method",
  description: "Discover the comprehensive support services offered by Tex Method, including installation, training, and maintenance contracts.",
  openGraph: {
    title: "Our Services | Tex Method",
    description: "Comprehensive support services including installation, training, and maintenance.",
    url: "/services",
  },
};

const services = [
  {
    icon: Wrench,
    title: "Installation Support",
    description: "Our certified technicians ensure seamless installation and integration of our machinery into your existing workflow, minimizing downtime and maximizing productivity from day one.",
    features: ["On-site setup", "Workflow integration", "Initial calibration", "Safety checks"],
  },
  {
    icon: School,
    title: "Training Programs",
    description: "We provide comprehensive training for your operators and maintenance staff. Our programs cover machine operation, routine maintenance, and troubleshooting to empower your team.",
    features: ["Operator training", "Maintenance workshops", "Advanced feature tutorials", "Certification programs"],
  },
  {
    icon: ShieldCheck,
    title: "Maintenance Contracts",
    description: "Protect your investment with our flexible maintenance contracts. We offer regular check-ups, preventative maintenance, and priority support to ensure your machines run at peak performance.",
    features: ["Preventative maintenance", "24/7 technical support", "Genuine spare parts", "Software updates"],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <PageHeader
        title="Our Services"
        subtitle="Your Partner in Success"
        description="At Tex Method, our commitment extends beyond selling machines. We provide end-to-end services to ensure you get the most out of your investment, from initial setup to long-term operational excellence."
      />

      <section className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}
