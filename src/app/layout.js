import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ORGANIZE | Loanding',
  description: 'Loanding page of ORGANIZE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:bg-tablet lg:bg-none`} style={{background: 'linear-gradient(135deg, rgba(238, 238, 238, 0.8) 0%, rgba(101, 175, 150, .4) 100%)'}}>{children}</body>
    </html>
  )
}
