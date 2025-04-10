import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Define service data
const services = {
  "3d-graphics-animation": {
    title: "3D Graphics & Animation",
    description: "Stunning visuals and animations that bring your ideas to life",
    icon: "Cube",
    heroImage: "/placeholder.svg?height=600&width=1200",
    overview:
      "Our 3D Graphics & Animation services transform concepts into immersive visual experiences. We create stunning 3D models, animations, and visualizations that captivate audiences and effectively communicate your message.",
    benefits: [
      "Photorealistic 3D models and environments",
      "Character design and animation",
      "Product visualization and demonstrations",
      "Architectural visualization",
      "Interactive 3D experiences",
    ],
    industries: [
      "Entertainment & Media",
      "Architecture & Real Estate",
      "Product Design & Manufacturing",
      "Education & Training",
      "Marketing & Advertising",
    ],
  },
  "web-development": {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies",
    icon: "Code",
    heroImage: "/placeholder.svg?height=600&width=1200",
    overview:
      "Our Web Development services deliver custom, high-performance websites and web applications that drive results. We combine cutting-edge technologies with user-centered design to create digital experiences that engage users and achieve your business objectives.",
    benefits: [
      "Custom website and web application development",
      "Responsive design for all devices",
      "E-commerce solutions",
      "Content management systems",
      "Progressive web applications",
    ],
    industries: [
      "E-commerce & Retail",
      "Healthcare & Wellness",
      "Education & E-learning",
      "Finance & Banking",
      "Travel & Hospitality",
    ],
  },
  "ui-ux-design": {
    title: "UI/UX & Web Design",
    description: "User-centered design that creates intuitive and engaging experiences",
    icon: "Palette",
    heroImage: "/placeholder.svg?height=600&width=1200",
    overview:
      "Our UI/UX & Web Design services focus on creating intuitive, engaging, and visually appealing digital experiences. We combine aesthetics with functionality to design interfaces that delight users and drive conversions.",
    benefits: [
      "User research and persona development",
      "Information architecture and wireframing",
      "Interactive prototyping",
      "Visual design and branding",
      "Usability testing and optimization",
    ],
    industries: [
      "SaaS & Technology",
      "E-commerce & Retail",
      "Healthcare & Wellness",
      "Finance & Banking",
      "Media & Entertainment",
    ],
  },
  "seo-marketing": {
    title: "SEO & Marketing",
    description: "Data-driven strategies to increase your online visibility and reach",
    icon: "BarChart",
    heroImage: "/placeholder.svg?height=600&width=1200",
    overview:
      "Our SEO & Marketing services help businesses increase their online visibility, attract qualified traffic, and convert visitors into customers. We develop data-driven strategies that deliver measurable results and drive sustainable growth.",
    benefits: [
      "Comprehensive SEO audits and optimization",
      "Content marketing and strategy",
      "Pay-per-click (PPC) advertising",
      "Social media marketing",
      "Analytics and performance tracking",
    ],
    industries: [
      "E-commerce & Retail",
      "Professional Services",
      "Healthcare & Wellness",
      "Education & E-learning",
      "Local Businesses",
    ],
  },
  "fintech-solutions": {
    title: "Fintech Software Solutions",
    description: "Secure and scalable financial technology solutions",
    icon: "Landmark",
    heroImage: "/placeholder.svg?height=600&width=1200",
    overview:
      "Our Fintech Software Solutions provide secure, scalable, and innovative technology for the financial sector. We develop custom applications that streamline operations, enhance customer experiences, and ensure compliance with regulatory requirements.",
    benefits: [
      "Payment processing systems",
      "Banking and lending platforms",
      "Investment and wealth management tools",
      "Blockchain and cryptocurrency solutions",
      "Regulatory compliance and security",
    ],
    industries: [
      "Banking & Financial Services",
      "Insurance",
      "Investment & Wealth Management",
      "Cryptocurrency & Blockchain",
      "Lending & Credit",
    ],
  },
  "custom-software": {
    title: "Custom Software Development",
    description: "Tailored software solutions to address your unique business challenges",
    icon: "Settings",
    heroImage: "/placeholder.svg?height=600&width=1200",
    overview:
      "Our Custom Software Development services deliver tailored solutions that address your unique business challenges. We work closely with you to understand your requirements and develop software that streamlines operations, enhances productivity, and drives growth.",
    benefits: [
      "Enterprise resource planning (ERP) systems",
      "Customer relationship management (CRM) software",
      "Workflow automation tools",
      "Data analytics and business intelligence",
      "Mobile applications and cross-platform solutions",
    ],
    industries: [
      "Manufacturing & Logistics",
      "Healthcare & Life Sciences",
      "Retail & Distribution",
      "Professional Services",
      "Energy & Utilities",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({
    service,
  }));
}

export function generateMetadata({
  params
}) {
  const service = services[params.service]

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found",
    }
  }

  return {
    title: `${service.title} - TechInnovate`,
    description: service.description,
  }
}

export default function ServicePage({
  params
}) {
  const service = services[params.service]

  if (!service) {
    notFound()
  }

  return (
    (<div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{service.title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{service.description}</p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-10 px-8 font-medium text-primary-foreground transition-colors bg-primary rounded-md shadow hover:bg-primary/90">
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={service.heroImage || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Overview Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
              <p className="mt-4 text-lg text-muted-foreground">{service.overview}</p>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/about">Learn About Our Approach</Link>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex">
                    <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Industries We Serve</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our {service.title} services are tailored to meet the unique needs of various industries
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.industries.map((industry, i) => (
              <div key={i} className="p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-bold">{industry}</h3>
                <p className="mt-2 text-muted-foreground">
                  Tailored solutions to address the unique challenges and opportunities in this sector.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Business?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contact us today to discuss how our {service.title} services can help you achieve your goals.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>)
  );
}
