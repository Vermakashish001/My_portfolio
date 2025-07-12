import './globals.css'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Modern Portfolio - Your Name',
  description: 'A stunning modern portfolio showcasing my work and skills',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-900 text-white antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#ffffff',
              border: '1px solid #0ea5e9',
            },
          }}
        />
      </body>
    </html>
  )
}
