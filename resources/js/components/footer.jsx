// import Link from "next/link"
import { Link } from "@inertiajs/react";
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    (<footer className="bg-muted/50 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block mb-4 text-xl font-bold">
              TechInnovate
            </Link>
            <p className="mb-4 text-muted-foreground">
              Empowering innovation through digital excellence. We transform ideas into powerful digital solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "3D Graphics & Animation", href: "/services/3d-graphics-animation" },
                { name: "Web Development", href: "/services/web-development" },
                { name: "UI/UX & Web Design", href: "/services/ui-ux-design" },
                { name: "SEO & Marketing", href: "/services/seo-marketing" },
                { name: "Fintech Solutions", href: "/services/fintech-solutions" },
                { name: "Custom Software", href: "/services/custom-software" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Careers", href: "/careers" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">123 Innovation Street, Tech City, TC 10101</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-muted-foreground">info@techinnovate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} TechInnovate. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary hover:underline">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary hover:underline">
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-primary hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>)
  );
}
