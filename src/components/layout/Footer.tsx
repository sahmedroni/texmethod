import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-primary-foreground/80">
              Innovating the future of garment manufacturing since 2015.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-accent">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-accent">
                <Twitter size={20} />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-accent">
                <Linkedin size={20} />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-primary-foreground/80 hover:text-accent">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent">Installation Support</Link></li>
                <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent">Training Programs</Link></li>
                <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent">Maintenance Contracts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-primary-foreground/80">
              <p>123 Garment Avenue, Dhaka, Bangladesh</p>
              <p>Email: <a href="mailto:info@texmethod.com" className="hover:text-accent">info@texmethod.com</a></p>
              <p>Phone: <a href="tel:+8801234567890" className="hover:text-accent">+880 123 456 7890</a></p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Tex Method Company Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
