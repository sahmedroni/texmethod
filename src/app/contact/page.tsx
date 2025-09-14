import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us | Tex Method",
  description: "Get in touch with Tex Method. Find our address, contact details, or send us a message through our contact form.",
  openGraph: {
    title: "Contact Us | Tex Method",
    description: "Get in touch with Tex Method. Find our address, contact details, or send us a message through our contact form.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <PageHeader
        title="Contact Us"
        subtitle="We're Here to Help"
        description="Whether you have a question about our products, need assistance with a service, or want to discuss a potential partnership, our team is ready to answer all your questions."
      />

      <section className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Info and Map */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">House: Priyo Darshini, House no.:- 1256 (4th Floor), Road-09, DOHS, Mirpur, Dhaka-1216, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@texmethod.com" className="text-muted-foreground hover:text-primary">info@texmethod.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+8801716313280" className="text-muted-foreground hover:text-primary">+8801716313280</a>
                </div>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <Button asChild>
                <a href="https://wa.me/8801716313280" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+8801716313280">
                  <Phone className="mr-2 h-5 w-5" /> Call Us
                </a>
              </Button>
            </div>
            <div className="relative mt-8 h-64 w-full overflow-hidden rounded-lg shadow-md md:h-80">
              <iframe
                src="https://www.google.com/maps?q=23.837444,90.365972&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tex Method Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg bg-card p-8 shadow-lg">
            <h2 className="mb-6 text-3xl font-bold text-primary">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
