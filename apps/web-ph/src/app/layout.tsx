import './globals.css'
import { BaseLayout } from '@mono/ui'

export const metadata = {
  title: 'Pizza Hut',
  description: 'Pizza Hut',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><BaseLayout>{children}</BaseLayout></body>
    </html>
  )
}
