import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "TechInnovate transformed our digital presence completely. Their team delivered a solution that exceeded our expectations and helped us achieve our business goals.",
    author: "Sarah Johnson",
    title: "CEO, GrowthTech",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with TechInnovate was a game-changer for our company. Their expertise in fintech solutions helped us streamline our operations and improve customer satisfaction.",
    author: "Michael Chen",
    title: "CTO, FinanceFlow",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at TechInnovate delivered our project on time and within budget. Their attention to detail and commitment to quality is unmatched in the industry.",
    author: "Emily Rodriguez",
    title: "Marketing Director, BrandBoost",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((current + 1) % testimonials.length)

  return (
    (<div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="w-full flex-shrink-0 bg-card border-none shadow-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <p className="text-lg mb-6 max-w-3xl mx-auto">"{testimonial.quote}"</p>
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover" />
                  </div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to testimonial ${index + 1}`} />
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full hidden md:flex"
        onClick={prev}
        aria-label="Previous testimonial">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full hidden md:flex"
        onClick={next}
        aria-label="Next testimonial">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>)
  );
}
