"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { Enquiries } from "@/lib/Apis";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [service, setService] = useState(""); // State to manage the selected service

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formValues = {
      fName: e.target.elements["first-name"].value,
      lName: e.target.elements["last-name"].value,
      email: e.target.elements["email"].value,
      phone: e.target.elements["phone"].value,
      service: service || "Not selected", // Use the controlled service state
      msg: e.target.elements["message"].value,
    };

    // Print form data to console
    console.log("Form Data:", formValues);

    const sendEnquiry = Enquiries(formValues);
    console.log(sendEnquiry);
    
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 text-center border rounded-lg bg-muted/50">
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input id="first-name" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input id="last-name" placeholder="Doe" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service of Interest</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3d-graphics">3D Graphics & Animation</SelectItem>
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="ui-ux-design">UI/UX & Web Design</SelectItem>
            <SelectItem value="seo-marketing">SEO & Marketing</SelectItem>
            <SelectItem value="fintech">Fintech Software Solutions</SelectItem>
            <SelectItem value="custom-software">Custom Software Development</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project or inquiry..."
          className="min-h-[120px]"
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}