import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dاللوى تل',
  description: 'Interactive Web Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
