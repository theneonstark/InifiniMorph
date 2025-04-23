import { ChevronRight, Play, Layers, Palette, Zap, Monitor, Cpu } from "lucide-react"
import { ServiceSidebar } from "@/components/service-sidebar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Link } from "@inertiajs/react"
import RootLayout from "../layout"

export default function GraphicPage() {
  return (
    <RootLayout>
      <div className="min-h-screen">
        {/* Header Image and Breadcrumb */}
        <div className="relative h-48 w-full bg-muted/50">
          <div className="absolute inset-0"></div>
          <div className="container mx-auto px-4">
            <div className="relative pt-20">
              <h1 className="text-3xl font-bold">3D Graphics & Animation</h1>
              <nav className="mt-4">
                <ol className="flex text-sm">
                  <li className="flex items-center">
                    <Link href="/">Home</Link>
                    <ChevronRight className="mx-2 h-4 w-4" />
                  </li>
                  <li className="">3D Graphics & Animation</li>
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
              <ServiceSidebar label={"graphic"} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-md bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">3D Graphics & Animation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                    Our 3D Graphics & Animation services are dedicated to bringing your ideas to life through stunning
                    visuals and dynamic motion. We specialize in creating high-quality 3D models, animations, and visual
                    effects that captivate audiences and elevate your brand's presence across digital platforms.
                  </p>
                  <p>
                    We blend artistic creativity with cutting-edge technology to produce immersive 3D experiences, from
                    realistic product visualizations to engaging animated storytelling. Our team of skilled animators
                    and 3D artists collaborates closely with clients to understand their vision and deliver tailored
                    solutions that meet both creative and commercial objectives.
                  </p>

                  {/* Blockquote */}
                  <div className="rounded-lg border-l-4 p-4">
                    <p className="italic">
                      "Great 3D animation doesn't just move; it inspires. Our mission is to craft visuals that leave a
                      lasting impression, seamlessly blending art and innovation."
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
