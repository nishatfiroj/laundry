import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "All Star Laundry",
  description: "Laundry by the Star Pizza Family",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans.variable}`}>{children}</body>
    </html>
  )
}
