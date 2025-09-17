import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://forgeflow.com'),
  title: 'ForgeFlow Pilot',
  description: 'Streamline your MLOps pipeline from dataset to deployment.',
  openGraph: {
    title: 'ForgeFlow Pilot',
    description: 'Streamline your MLOps pipeline from dataset to deployment.',
    url: '/',
    siteName: 'ForgeFlow Pilot',
    images: [
      { url: '/favicon_io/android-chrome-512x512.png', width: 512, height: 512, alt: 'ForgeFlow Logo' },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ForgeFlow Pilot',
    description: 'Streamline your MLOps pipeline from dataset to deployment.',
    images: ['/favicon_io/android-chrome-512x512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background" suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
