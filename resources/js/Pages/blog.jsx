import { Input } from "@/components/ui/input";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Head } from "@inertiajs/react";
import RootLayout from "./layout";
// import imagePlaceholder from "@/assets/placeholder.svg";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Transformation",
    excerpt:
      "Exploring how emerging technologies are reshaping business landscapes and creating new opportunities for innovation.",
    date: "April 10, 2023",
    category: "Technology",
    image: "imagePlaceholder",
    slug: "future-of-digital-transformation",
  },
  {
    id: 2,
    title: "UI/UX Design Trends for 2023",
    excerpt:
      "A comprehensive look at the latest design trends that are enhancing user experiences and driving engagement.",
    date: "March 25, 2023",
    category: "Design",
    image: "imagePlaceholder",
    slug: "ui-ux-design-trends-2023",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    excerpt:
      "Best practices and strategies for developing web applications that can grow with your business needs.",
    date: "March 12, 2023",
    category: "Development",
    image: "imagePlaceholder",
    slug: "building-scalable-web-applications",
  },
  {
    id: 4,
    title: "The Rise of Fintech Solutions",
    excerpt:
      "How financial technology is transforming traditional banking and creating new opportunities for businesses and consumers.",
    date: "February 28, 2023",
    category: "Fintech",
    image: "imagePlaceholder",
    slug: "rise-of-fintech-solutions",
  },
  {
    id: 5,
    title: "Effective SEO Strategies for 2023",
    excerpt:
      "Proven techniques to improve your website's visibility and drive organic traffic in an increasingly competitive digital landscape.",
    date: "February 15, 2023",
    category: "Marketing",
    image: "imagePlaceholder",
    slug: "effective-seo-strategies-2023",
  },
  {
    id: 6,
    title: "3D Animation in Modern Marketing",
    excerpt:
      "How businesses are leveraging 3D animation to create compelling visual content that engages audiences and drives conversions.",
    date: "January 30, 2023",
    category: "Animation",
    image: "imagePlaceholder",
    slug: "3d-animation-modern-marketing",
  },
];

export default function Blog() {
  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen">
      <Head title="Blog - TechInnovate" />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Blog</h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
            Insights, news, and resources from our team of experts
          </p>
        </div>
      </section>

      <section className="py-8 border-b">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {["All", "Technology", "Design", "Development", "Marketing", "Fintech", "Animation"].map((category) => (
              <Link
                key={category}
                href={category === "All" ? "/blog" : `/blog/category/${category.toLowerCase()}`}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  category === "All" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <Button variant="link" className="px-0 mt-4" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight">Subscribe to Our Newsletter</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay updated with the latest insights and news from our team
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-6">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>
    </div>
    </RootLayout>
  );
}