import { ChevronRight, Cpu, Layers, Mail, MessageSquare, Monitor, Palette, Play, Zap } from "lucide-react"
import { ServiceSidebar } from "@/components/service-sidebar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@inertiajs/react"
import RootLayout from "../layout"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function WebDevPage() {
  return (
    <RootLayout>
        <div className="min-h-screen">
      {/* Header Image and Breadcrumb */}
      <div className="relative h-48 w-full bg-muted/50">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4">
          <div className="relative pt-20">
            <h1 className="text-3xl font-bold">Web Development</h1>
            <nav className="mt-4">
              <ol className="flex text-sm">
                <li className="flex items-center">
                  <Link href="/">
                    Home
                  </Link>
                  <ChevronRight className="mx-2 h-4 w-4" />
                </li>
                <li className="">Web Development</li>
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
            <ServiceSidebar label={'web'}/>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
              <Card className="border-none shadow-md bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Web Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                  Our Web Development services are designed to bring your ideas to life through interactive, high-performing digital experiences. We specialize in building responsive websites, robust web applications, and dynamic user interfaces that engage users and strengthen your brand's digital identity.
                  </p>
                  <p>
                  We merge creative design with modern development technologies to deliver tailored, full-stack solutions—from sleek front-end experiences to powerful back-end systems. Our team of developers, designers, and strategists work closely with you to understand your goals and craft digital products that align with your business objectives.
                  </p>

                  {/* Blockquote */}
                  <div className="rounded-lg border-l-4 p-4">
                    <p className="italic">
                    “Great web development isn’t just functional—it’s unforgettable. Our mission is to build seamless, scalable, and user-centric platforms that leave a lasting impression by blending design with innovation.”
                    </p>
                  </div>

                  {/* Benefits Section as Slider */}
                  <div className="py-6">
                    <h2 className="mb-6 text-xl font-bold">Our Benefits</h2>
                    <Carousel className="w-full">
                      <CarouselContent>
                        <CarouselItem className="md:basis-1/2">
                          <Card className="shadow-sm h-full">
                            <CardHeader className="pb-2">
                              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                                <Layers className="h-5 w-5 text-primary" />
                              </div>
                              <CardTitle className="text-lg">Realistic 3D Modeling</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Create highly detailed and photorealistic 3D models for products, environments, and
                                characters that captivate your audience.
                              </CardDescription>
                            </CardContent>
                          </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2">
                          <Card className="shadow-sm h-full">
                            <CardHeader className="pb-2">
                              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                                <Palette className="h-5 w-5 text-primary" />
                              </div>
                              <CardTitle className="text-lg">Custom Animation</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Bring your ideas to life with fluid, expressive animations that tell your story and
                                engage viewers on a deeper level.
                              </CardDescription>
                            </CardContent>
                          </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2">
                          <Card className="shadow-sm h-full">
                            <CardHeader className="pb-2">
                              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                                <Zap className="h-5 w-5 text-primary" />
                              </div>
                              <CardTitle className="text-lg">Visual Effects</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Enhance your projects with stunning visual effects that add impact and create memorable
                                experiences for your audience.
                              </CardDescription>
                            </CardContent>
                          </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2">
                          <Card className="shadow-sm h-full">
                            <CardHeader className="pb-2">
                              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                                <Monitor className="h-5 w-5 text-primary" />
                              </div>
                              <CardTitle className="text-lg">Interactive Experiences</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Create immersive 3D experiences for web, mobile, and VR platforms that allow users to
                                interact with your content in new ways.
                              </CardDescription>
                            </CardContent>
                          </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/2">
                          <Card className="shadow-sm h-full">
                            <CardHeader className="pb-2">
                              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                                <Cpu className="h-5 w-5 text-primary" />
                              </div>
                              <CardTitle className="text-lg">Technical Optimization</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <CardDescription>
                                Ensure your 3D assets are optimized for performance across all platforms while
                                maintaining visual quality and fidelity.
                              </CardDescription>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      </CarouselContent>
                      <div className="flex justify-center mt-4 gap-2">
                        <CarouselPrevious className="relative static transform-none" />
                        <CarouselNext className="relative static transform-none" />
                      </div>
                    </Carousel>
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
