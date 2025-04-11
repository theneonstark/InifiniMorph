import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { Link, usePage } from "@inertiajs/react"

export default function Navbar() {
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { url } = usePage() // Get current route for active nav item

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "" },
    { name: "Services", href: "/infini/public/services" },
    { name: "About", href: "/infini/public/about" },
    { name: "Blog", href: "/infini/public/blog" },
    { name: "Contact", href: "/infini/public/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="text-xl font-bold">InifiniMorph Consulting</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                url === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16 bg-background">
          <nav className="flex flex-col items-center justify-center flex-1 p-8 space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  url === item.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4" asChild onClick={closeMenu}>
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
