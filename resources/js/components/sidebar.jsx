import { BarChart3, FileText, Home, LayoutDashboard, MessageSquare, Star, Clock } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Link } from "@inertiajs/react"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="flex h-14 items-center border-b px-4 py-2">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <LayoutDashboard className="h-6 w-6" />
          <span>Admin Panel</span>
        </Link>
      </div>
      <div className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/dashboard" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/services"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/services" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
          >
            <FileText className="h-4 w-4" />
            Services
          </Link>
          <Link
            href="/blog"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/blog" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
          >
            <FileText className="h-4 w-4" />
            Blog
          </Link>
          <Link
            href="/enquiries"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/enquiries" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
          >
            <MessageSquare className="h-4 w-4" />
            Enquiries
          </Link>
          <Link
            href="/sessions"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/sessions" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
          >
            <Clock className="h-4 w-4" />
            Sessions
          </Link>
          <Link
            href="/reviews"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/reviews" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
          >
            <Star className="h-4 w-4" />
            Reviews
          </Link>
          <Link
            href="/analytics"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === "/analytics" ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
          >
            <BarChart3 className="h-4 w-4" />
            Analytics
          </Link>
        </nav>
      </div>
      <div className="mt-auto border-t">
        <div className="flex items-center gap-3 px-4 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="text-sm font-medium">AD</span>
          </div>
          <div className="grid gap-0.5 text-sm">
            <div className="font-medium">Admin User</div>
            <div className="text-xs text-muted-foreground">admin@example.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}
