// resources/js/Pages/ContactPage.jsx
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '@/Components/Contact-Form'
import { Head } from '@inertiajs/react'
import RootLayout from './layout'

export default function Contact() {
  return (
    <RootLayout>
      <div className="flex flex-col min-h-screen">
      <Head title="Contact Us - TechInnovate" />

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/50">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Get in Touch</h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
            Have a question or want to discuss a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our team is here to help. Reach out to us through any of the following channels.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Street<br />
                      Tech City, TC 10101<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">info@techinnovate.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond as soon as possible</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 border rounded-md text-sm hover:bg-muted transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Visit Our Office</h2>
            <p className="mt-4 text-lg text-muted-foreground">We're located in the heart of Tech City</p>
          </div>
          <div className="h-[400px] rounded-lg overflow-hidden border">
            {/* This would be a map component in a real implementation */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Would Be Here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </RootLayout>
  )
}