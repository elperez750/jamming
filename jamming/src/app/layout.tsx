import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNavbar from '../app/components/layout/sideNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jamming',
  description: 'Your personal music streaming app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <SideNavbar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}