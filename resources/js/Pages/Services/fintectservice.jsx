import { ChevronRight, Mail, MessageSquare, Play } from "lucide-react"
import { ServiceSidebar } from "@/components/service-sidebar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@inertiajs/react"
import RootLayout from "../layout"

export default function UiUxDesignPage() {
  return (
    <RootLayout>
        <div className="min-h-screen">
      {/* Header Image and Breadcrumb */}
      <div className="relative h-48 w-full bg-muted/50">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4">
          <div className="relative pt-20">
            <h1 className="text-3xl font-bold">UI/UX Designing</h1>
            <nav className="mt-4">
              <ol className="flex text-sm">
                <li className="flex items-center">
                  <Link href="/">
                    Home
                  </Link>
                  <ChevronRight className="mx-2 h-4 w-4" />
                </li>
                <li className="">UI/UX Designing</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ServiceSidebar label={'fintech'}/>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-md bg-muted/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">UI/UX Designing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>
                  User Interface (UI) and User Experience (UX) design are crucial components of modern digital products.
                  Our UI/UX design services focus on creating intuitive, engaging, and user-friendly interfaces that
                  enhance the overall user experience and drive business results.
                </p>
                <p>
                  We combine aesthetic appeal with functional design to create digital experiences that are not only
                  visually stunning but also easy to navigate and use. Our team of experienced designers works closely
                  with clients to understand their business goals and user needs to deliver customized solutions.
                </p>

                {/* Blockquote */}
                <div className="rounded-lg border-l-4 p-4">
                  <p className="italic">
                    "Good design is obvious. Great design is transparent. Our goal is to craft interfaces that users
                    don't even notice because they work so seamlessly."
                  </p>
                </div>

                {/* Benefits Section */}
                <div className="py-6">
                  <h2 className="mb-6 text-xl font-bold">Our Benefits</h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card className="shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="mb-2 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">Support Management</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Comprehensive support throughout the design process and beyond, ensuring your UI/UX continues
                          to meet evolving user needs.
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="mb-2 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                          <Mail className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">Digital Marketing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Design that aligns with your marketing goals, creating cohesive brand experiences across all
                          digital touchpoints.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Video Section */}
                <div className="my-8 flex justify-center">
                  <div className="relative w-full max-w-2xl overflow-hidden rounded-lg shadow-lg">
                    <img
                      src="/placeholder.svg?height=400&width=700"
                      alt="UI/UX Design Process"
                      width={700}
                      height={400}
                      className="w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="icon" className="h-16 w-16 rounded-full">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="py-6">
                  <h2 className="mb-6 text-xl font-bold">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left font-medium">What are IT solutions?</AccordionTrigger>
                      <AccordionContent className="">
                        IT solutions are technology-based services and products designed to address specific business
                        challenges or improve operations. They can include software applications, hardware systems,
                        network infrastructure, cloud services, and more.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left font-medium">
                        How can IT solutions benefit my business?
                      </AccordionTrigger>
                      <AccordionContent className="">
                        IT solutions can streamline operations, reduce costs, improve customer experiences, enhance
                        security, enable remote work, provide valuable data insights, and help businesses stay
                        competitive in an increasingly digital marketplace.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left font-medium">
                        What types of IT solutions are available?
                      </AccordionTrigger>
                      <AccordionContent className="">
                        Available IT solutions include cloud computing, cybersecurity, data analytics, customer
                        relationship management (CRM), enterprise resource planning (ERP), UI/UX design, mobile
                        applications, web development, and managed IT services.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left font-medium">
                        How do I choose the right IT solutions for my business?
                      </AccordionTrigger>
                      <AccordionContent className="">
                        Choosing the right IT solutions involves assessing your business needs, goals, and challenges;
                        considering your budget and resources; evaluating different vendors and solutions; consulting
                        with IT professionals; and planning for implementation and ongoing support.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </RootLayout>
  )
}
