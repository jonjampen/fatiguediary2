import './globals.scss'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fatigue Diary',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <main className="h-[calc(100vh-64px-24px-1px)]"> {/* -nav-margintop-navborder */}
          {children}
        </main>
      </body>
    </html>
  )
}
