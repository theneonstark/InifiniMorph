import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "InfiniMorph Consulting - All-In-One Solutions",
  description: "Empowering innovation through digital excellence",
}

export default function RootLayout({children}) {
  return (
    (<html lang="en" suppressHydrationWarning>
      <body >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
      </body>
    </html>)
  );
}
