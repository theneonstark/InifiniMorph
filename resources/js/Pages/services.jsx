import { Link } from "@inertiajs/react"
import { ArrowRight } from "lucide-react"
import ServiceCard from "@/components/service-card"
import RootLayout from "./layout"

export default function Services() {
  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Services</h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
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
              {
                title: "Company Registration",
                description: "Tailored software solutions to address your unique business challenges",
                icon: "Building2",
                href: "/services/Company-Registration",
              },
              {
                title: "ITR File",
                description: "Tailored software solutions to address your unique business challenges",
                icon: "HandCoins",
                href: "/services/ITR-File",
              },
              {
                title: "Payroll & Registration",
                description: "Tailored software solutions to address your unique business challenges",
                icon: "ReceiptText",
                href: "/services/Payroll-Registration-Support",
              },
            ].map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              How we transform your ideas into powerful digital solutions
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We start by understanding your business goals, target audience, and project requirements.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Our team develops a comprehensive strategy tailored to your specific needs and objectives.",
              },
              {
                step: "03",
                title: "Development",
                description: "We bring your vision to life using cutting-edge technologies and best practices.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We ensure a smooth launch and provide ongoing support to help you succeed.",
              },
            ].map((process, i) => (
              <div key={i} className="relative p-6 border rounded-lg bg-card">
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {process.step}
                </div>
                <h3 className="mt-4 text-xl font-bold">{process.title}</h3>
                <p className="mt-2 text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contact us today to discuss your project and discover how we can help you achieve your goals.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-8 font-medium text-primary-foreground transition-colors bg-primary rounded-md shadow hover:bg-primary/90"
              >
                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </RootLayout>
  )
}
