import { CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "@inertiajs/react"
import { useState } from "react"
import { Enquiries } from "@/lib/Apis"

export function ServiceSidebar({label}) {
  console.log(label);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const serviceName = window.location.pathname.split('/').pop();

  const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Create an object with the form data
      const formValues = {
        email: e.target.elements["email"].value,
        service: serviceName || "Not selected", // Use the controlled service state
        msg: e.target.elements["message"].value,
      };
  
      Enquiries(formValues);
      setIsSubmitting(true);
  
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
  
      setIsSubmitting(false);
      setIsSubmitted(true);
    };

  const services = [
    { name: "3D Graphics & Animation", href: "/services/3d-graphics-animation", active: label==="graphic"},
    { name: "Web Development", href: "/services/web-development", active: label==="web" },
    { name: "UI/UX Designing", href: "/services/ui-ux-design", active: label==="uiux" },
    { name: "SEO & Digital Marketing", href: "/services/seo-marketing", active: label==="seo" },
    { name: "Fintech Software Solution", href: "/services/fintech-solutions", active: label==="fintect" },
    { name: "Custom Software Development", href: "/services/custom-software", active: label==="custom" },
    { name: "Company Registration", href: "/services/Company-Registration", active: label==="company" },
    { name: "ITR File", href: "/services/ITR-File", active: label==="itr" },
    { name: "Payroll & Registration", href: "/services/Payroll-Registration-Support", active: label==="payroll" },
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
        <CardContent className="p-4">
          {isSubmitted ? (
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Message Sent Successfully!</h3>
              <p className="mt-2 text-muted-foreground">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="border-gray-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  id="message"
                  className="border-gray-300 min-h-[100px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                <Send className="mr-2 h-4 w-4" /> {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
