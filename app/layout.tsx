import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const poppins = Poppins({ subsets: ['devanagari'], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: 'Learn by Doing',
  description: 'Learn NextJS 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-blue-100 ${poppins.className}`}>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
