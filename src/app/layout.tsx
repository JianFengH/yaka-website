import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Link } from '@nextui-org/react'
import Image from 'next/image'
import Navbar from '@/components/navbar'

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
            <Navbar />
            <main className="grow">{children}</main>
            <footer className="grow-0 shrink-0 w-full max-w-5xl mx-auto px-6 py-2 flex justify-between">
              <small>
                Copyright © 2023 YAKA
              </small>
              <ul className='flex items-center gap-2'>
                <li>
                  <Link href="https://twitter.com/YakaFinance" target='_blank'>
                    <Image
                      src="/twitter.svg"
                      alt="Yaka twitter"
                      width={24}
                      height={24}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/tVjEfpMw" target='_blank'>
                    <Image
                      src="/discord.svg"
                      alt="Yaka discord"
                      width={24}
                      height={24}
                      priority
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://yaka.gitbook.io/yaka-finance" target='_blank'>
                    <Image
                      src="/docs.svg"
                      alt="Yaka docs"
                      width={24}
                      height={24}
                      priority
                    />
                  </Link>
                </li>
              </ul>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
