import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Our Products | Tex Method",
  description: "Explore our range of advanced automated sewing machines and garment manufacturing solutions designed for precision and efficiency.",
  openGraph: {
    title: "Our Products | Tex Method",
    description: "Explore our range of advanced automated sewing machines and garment manufacturing solutions.",
    url: "/products",
  },
};

const products = [
  {
    name: "Auto-Stitch Pro X",
    description: "High-speed, AI-powered straight stitch machine for unparalleled precision and speed in mass production.",
    image: "https://placehold.co/600x400.png",
    hint: "sewing machine",
    specs: [
      { name: "Max Speed", value: "7,000 sti/min" },
      { name: "Stitch Length", value: "0.1 - 12.7 mm" },
      { name: "Power", value: "220V/50Hz" },
      { name: "Automation", value: "AI Thread Trimming & Tension" },
    ],
  },
  {
    name: "Tex-Overlock 5000",
    description: "A robust 5-thread overlock machine with automated fabric sensing for perfect seams on any material.",
    image: "https://placehold.co/600x400.png",
    hint: "industrial machine",
    specs: [
      { name: "Max Speed", value: "8,500 sti/min" },
      { name: "Needle Gauge", value: "3mm, 5mm" },
      { name: "Power", value: "380V/50Hz" },
      { name: "Automation", value: "Fabric Edge Sensing" },
    ],
  },
  {
    name: "Pattern Master-E",
    description: "Electronically controlled pattern sewer for complex designs, logos, and decorative stitching.",
    image: "https://placehold.co/600x400.png",
    hint: "textile machinery",
    specs: [
      { name: "Sewing Area", value: "300mm x 200mm" },
      { name: "Max Patterns", value: "999+" },
      { name: "Data Input", value: "USB / WiFi" },
      { name: "Automation", value: "Digital Pattern Control" },
    ],
  },
  {
    name: "FabricFlow Spreader",
    description: "Automated fabric spreading system that ensures tension-free laying for perfect cuts every time.",
    image: "https://placehold.co/600x400.png",
    hint: "fabric rolls",
    specs: [
      { name: "Max Width", value: "2.4 meters" },
      { name: "Spreading Speed", value: "100 m/min" },
      { name: "Layers", value: "Up to 250" },
      { name: "Automation", value: "Edge Alignment & End Cutter" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <PageHeader
        title="Our Products"
        subtitle="Engineered for Excellence"
        description="Discover our state-of-the-art machinery designed to bring automation, efficiency, and unmatched quality to your production line. Each product is a testament to our commitment to innovation."
      />

      <section className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
