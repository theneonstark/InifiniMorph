import React from 'react'
import { Link } from '@inertiajs/react'
import { Button } from '@/components/ui/button'
import RootLayout from './layout'

export default function About() {
  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
            Learn about our company, our mission, and the team behind our innovative solutions
          </p>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Our company"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Founded in 2023, TechInnovate began with a simple mission: to help businesses harness the power of
                technology to achieve their goals...
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Over the years, we've partnered with businesses of all sizes...
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Today, we continue to push the boundaries of what's possible...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Mission & Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Guided by our core principles, we strive to deliver exceptional value to our clients
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description: "We embrace new technologies and approaches...",
              },
              {
                title: "Excellence",
                description: "We are committed to delivering the highest quality work...",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork...",
              },
              {
                title: "Integrity",
                description: "We operate with honesty and transparency...",
              },
              {
                title: "User-Centered",
                description: "We put users at the heart of our process...",
              },
              {
                title: "Continuous Learning",
                description: "We stay ahead of trends through constant learning...",
              },
            ].map((value, i) => (
              <div key={i} className="p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Meet Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The talented individuals behind our innovative solutions
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Alex Johnson", title: "CEO & Founder", image: "/placeholder.svg" },
              { name: "Sarah Chen", title: "CTO", image: "/placeholder.svg" },
              { name: "Michael Rodriguez", title: "Creative Director", image: "/placeholder.svg" },
              { name: "Emily Patel", title: "Lead Developer", image: "/placeholder.svg" },
              { name: "David Kim", title: "UX/UI Designer", image: "/placeholder.svg" },
              { name: "Jessica Taylor", title: "Marketing Specialist", image: "/placeholder.svg" },
              { name: "Robert Wilson", title: "Project Manager", image: "/placeholder.svg" },
              { name: "Olivia Martinez", title: "3D Artist", image: "/placeholder.svg" },
            ].map((member, i) => (
              <div key={i} className="group text-center">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "200+", label: "Clients Worldwide" },
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "8", label: "Years of Experience" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6">
                <p className="text-4xl font-bold text-primary">{stat.number}</p>
                <p className="mt-2 text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Work With Us?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's collaborate to create innovative solutions that drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </RootLayout>
  )
}
