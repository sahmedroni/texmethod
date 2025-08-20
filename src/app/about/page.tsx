import type { Metadata } from "next";
import Image from "next/image";

import { PageHeader } from "@/components/sections/PageHeader";
import { Timeline } from "@/components/about/Timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Tex Method",
  description: "Learn about Tex Method's mission, vision, and the innovative team driving the future of garment automation.",
  openGraph: {
    title: "About Us | Tex Method",
    description: "Learn about Tex Method's mission, vision, and the innovative team driving the future of garment automation.",
    url: "/about",
  },
};

const values = [
  { title: "Innovation", description: "Continuously pushing the boundaries of technology in garment manufacturing." },
  { title: "Precision", description: "Ensuring every machine and process meets the highest standards of accuracy." },
  { title: "Customer Centricity", description: "Building strong partnerships by understanding and meeting client needs." },
  { title: "Sustainability", description: "Developing solutions that reduce waste and promote a greener industry." },
];

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", image: "https://placehold.co/100x100.png", hint: "man portrait" },
  { name: "Jane Smith", role: "Chief Technology Officer", image: "https://placehold.co/100x100.png", hint: "woman portrait" },
  { name: "Samuel Green", role: "Head of Operations", image: "https://placehold.co/100x100.png", hint: "person portrait" },
  { name: "Emily White", role: "Lead R&D Engineer", image: "https://placehold.co/100x100.png", hint: "female engineer" },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <PageHeader
        title="About Tex Method"
        subtitle="Innovating Apparel Manufacturing"
        description="We are pioneers in automating the garment industry, blending cutting-edge technology with deep manufacturing expertise to create solutions that redefine efficiency, precision, and sustainability."
      />

      <section className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-muted-foreground">
              To empower garment manufacturers worldwide with intelligent automation solutions that enhance productivity, reduce operational costs, and elevate product quality.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the global leader in garment technology, creating a fully integrated, automated, and sustainable apparel production ecosystem for a smarter future.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">Our Core Values</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">Our Journey</h2>
        <Timeline />
      </section>

      <section className="bg-card py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold text-primary">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
