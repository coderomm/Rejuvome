import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rejuvome Therapeutics | Microbiome Research and Innovation',
  description: 'Rejuvome Therapeutics uses microbiome research to create innovative solutions that promote rejuvenation, longevity, and increasing healthspan.',
  keywords: 'Microbiome, Therapeutics, Healthspan, Microbiome Research, Longevity Research, Ageing Science',
  authors: [{ name: 'Darshit Patel' }],
  openGraph: {
    type: 'website',
    url: 'https://rejuvome.com/',
    title: 'Rejuvome Therapeutics | Microbiome Research and Innovation',
    description: 'Rejuvome Therapeutics uses microbiome research to create innovative solutions that promote rejuvenation, longevity, and increasing healthspan.',
    images: [
      {
        url: 'https://rejuvome.com/images/meta-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rejuvome Therapeutics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rejuvome Therapeutics | Microbiome Research and Innovation',
    description: 'Rejuvome Therapeutics uses microbiome research to create innovative solutions that promote rejuvenation, longevity, and increasing healthspan.',
    images: ['https://rejuvome.com/images/meta-image.jpg'],
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}