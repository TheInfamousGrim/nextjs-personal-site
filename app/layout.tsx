import './globals.css';
import 'devicon/devicon.min.css';

import type { Metadata } from 'next';
import Script from 'next/script';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StarsCanvas } from '@/components/canvas/Stars';

export const metadata: Metadata = {
  title: {
    default: 'GrimFunky',
    template: '%s | GrimFunky',
  },
  description:
    'GrimFunky AKA George Fincher. A fullstack react and nextjs developer.',
  openGraph: {
    title: 'GrimFunky',
    description:
      'GrimFunky AKA George Fincher. A fullstack react and nextjs developer.',
    url: 'https://grimfunky.dev',
    siteName: 'GrimFunky',
    images: [
      {
        url: 'https://www.grimfunky.dev/og.jpg',
        width: 1920,
        height: 1080,
        alt: `GrimFunky website's homepage showing the title, a short description, social links and a grid of pictures`,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'GrimFunky',
    card: 'summary_large_image',
    description:
      'GrimFunky AKA George Fincher. A fullstack react and nextjs developer.',
    siteId: '1488897330451562507',
    creator: '@grimfunk69',
    creatorId: '1488897330451562507',
    images: [
      {
        url: 'https://www.grimfunky.dev/og.jpg',
        alt: `GrimFunky website's homepage showing the title, a short description, social links and a grid of pictures`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full">
      <head>
        <Script id="set-theme">{`
          let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

          updateMode()
          darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
          window.addEventListener('storage', updateModeWithoutTransitions)

          function updateMode() {
          let isSystemDarkMode = darkModeMediaQuery.matches
          let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

            if (isDarkMode) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }

            if (isDarkMode === isSystemDarkMode) {
              delete window.localStorage.isDarkMode
            }
          }

          function disableTransitionsTemporarily() {
            document.documentElement.classList.add('[&_*]:!transition-none')
            window.setTimeout(() => {
              document.documentElement.classList.remove('[&_*]:!transition-none')
            }, 0)
          }

          function updateModeWithoutTransitions() {
            disableTransitionsTemporarily()
            updateMode()}
          `}</Script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicons/site.webmanifest" />
      </head>
      <body className="flex h-full flex-col bg-[#12071f]">
        <StarsCanvas />
        <div className="fixed inset-0 flex w-screen justify-center overflow-x-hidden sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-aquamarine dark:bg-zinc-900"></div>
          </div>
        </div>
        <div className="relative overflow-x-visible">
          <Header />
          <main className="w-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
