import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "@inertiajs/react"

export function ServiceSidebar() {
  const services = [
    { name: "Data Visualization", href: "#", active: false },
    { name: "UI/UX Designing", href: "#", active: true },
    { name: "Digital Marketing", href: "#", active: false },
    { name: "Marketing Strategy", href: "#", active: false },
    { name: "Data Analysis", href: "#", active: false },
    { name: "Security System", href: "#", active: false },
  ]

  return (
    <div className="space-y-6">
      {/* Services Card */}
      <Card className="shadow-md">
        <CardHeader className="rounded-t-lg bg-muted/50">
          <CardTitle>All Services</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="divide-y">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className={`block px-4 py-3 transition-colors ${
                    service.active ? "font-medium bg-muted/50" : "hover:bg-muted/50"
                  }`}
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Query Card */}
      <Card className="shadow-md">
        <CardHeader className="text-center  rounded-t-lg">
          <CardTitle className="text-xl">Have Any Query?</CardTitle>
          <CardDescription>Feel Free Contact</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center p-6">
          <Button className="w-full">Contact Us</Button>
        </CardFooter>
      </Card>

      {/* Quick Contact Form */}
      <Card className="shadow-md">
        <CardHeader className="rounded-t-lg">
          <CardTitle>Quick Contact</CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="space-y-2">
            <Input type="email" placeholder="Your Email" className="border-gray-300" />
          </div>
          <div className="space-y-2">
            <Textarea placeholder="Your Message" className="border-gray-300 min-h-[100px]" />
          </div>
          <Button className="w-full">
            <Send className="mr-2 h-4 w-4" /> Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
