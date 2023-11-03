import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YAKA',
  description: 'VE(3,3) DEX on SEI blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <div className="box-border min-h-screen flex flex-col">
            <div className="grow">{children}</div>
            <footer className="grow-0 shrink-0 container mx-auto">
              <small>
                Copyright © 2023 YAKA. All Rights Reserved.
              </small>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
