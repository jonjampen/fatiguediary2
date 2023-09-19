import './globals.scss'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Provider from './lib/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fatigue Diary',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <main className="h-[calc(100vh-64px-24px-1px)]"> {/* -nav-margintop-navborder */}
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
