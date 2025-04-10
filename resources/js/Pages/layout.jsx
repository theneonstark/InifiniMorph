// import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
// import "app.css"

// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TechInnovate - Digital Excellence",
  description: "Empowering innovation through digital excellence",
}

export default function RootLayout({children}) {
  return (
    (<html lang="en" suppressHydrationWarning>
      <body >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange> */}
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>)
  );
}
