// import Link from "next/link"
// import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import TestimonialSlider from "@/components/testimonial-slider"
import { Link } from "@inertiajs/react";
import RootLayout from "./layout";

export default function Welcome() {
  return (
    (<RootLayout>
      <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div
          className="absolute inset-0 w-full h-full bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="container relative z-10 px-4 py-24 mx-auto text-center">
          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Innovation Through <span className="text-primary">Digital Excellence</span>
          </h1>
          <p
            className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground md:text-xl">
            We transform ideas into powerful digital solutions that drive growth and innovation for businesses
            worldwide.
          </p>
          <div
            className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">
                Explore Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div
          className="absolute inset-0 pointer-events-none bg-background/30 backdrop-blur-[2px]" />
      </section>
      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Mission & Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're on a mission to empower businesses through innovative digital solutions that drive growth and
                create meaningful experiences.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Client-focused approach",
                  "Cutting-edge technology",
                  "Sustainable solutions",
                  "Continuous innovation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" variant="outline" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=800"
                alt="About our company"
                fill
                className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "3D Graphics & Animation",
                description: "Stunning visuals and animations that bring your ideas to life",
                icon: "Cube",
                href: "/services/3d-graphics-animation",
              },
              {
                title: "Web Development",
                description: "Custom websites and web applications built with the latest technologies",
                icon: "Code",
                href: "/services/web-development",
              },
              {
                title: "UI/UX & Web Design",
                description: "User-centered design that creates intuitive and engaging experiences",
                icon: "Palette",
                href: "/services/ui-ux-design",
              },
              {
                title: "SEO & Marketing",
                description: "Data-driven strategies to increase your online visibility and reach",
                icon: "BarChart",
                href: "/services/seo-marketing",
              },
              {
                title: "Fintech Software Solutions",
                description: "Secure and scalable financial technology solutions",
                icon: "Landmark",
                href: "/services/fintech-solutions",
              },
              {
                title: "Custom Software Development",
                description: "Tailored software solutions to address your unique business challenges",
                icon: "Settings",
                href: "/services/custom-software",
              },
            ].map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href} />
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg opacity-90">
            Let's collaborate to create innovative solutions that drive your business forward
          </p>
          <Button size="lg" variant="secondary" className="mt-10" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
      {/* Blog Preview Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div
            className="flex flex-col items-center justify-between gap-4 mb-12 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest Updates</h2>
              <p className="mt-2 text-lg text-muted-foreground">Insights and news from our team</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Blog post ${post}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">April {post + 9}, 2023</p>
                  <h3 className="mt-2 text-xl font-bold">The Future of Digital Transformation</h3>
                  <p className="mt-2 text-muted-foreground">
                    Exploring how emerging technologies are reshaping business landscapes...
                  </p>
                  <Button variant="link" className="px-0 mt-4" asChild>
                    <Link href={`/blog/post-${post}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </RootLayout>)
  );
}
