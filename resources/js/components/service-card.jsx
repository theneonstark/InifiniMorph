// import Link from "next/link"
import {
  ArrowRight,
  CuboidIcon as Cube,
  Code,
  Palette,
  BarChart,
  Landmark,
  Settings,
  Building2,
  HandCoins,
  ReceiptText,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Link } from "@inertiajs/react";

export default function ServiceCard({
  title,
  description,
  icon,
  href,
  className
}) {
  const IconMap = {
    Cube,
    Code,
    Palette,
    BarChart,
    Landmark,
    Settings,
    Building2,
    HandCoins,
    ReceiptText,
  }

  const Icon = IconMap[icon] || Cube

  return (
    (<Card
      className={cn("group overflow-hidden transition-all hover:shadow-lg", className)}>
      <CardHeader>
        <div
          className="p-2 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Our expert team delivers innovative solutions tailored to your specific needs.
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href={href}
          className="group inline-flex items-center text-sm font-medium text-primary">
          Learn More
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>)
  );
}
