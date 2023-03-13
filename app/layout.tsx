import './globals.css';
import Script from 'next/script';

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// theme Script
import { themeScript } from '@/lib/themeScript';

export const metadata = {
  title: 'GrimFunky Fullstack Portfolio',
  description:
    'The personal site of GrimFunky AKA George Fincher. A fullstack react and nextjs developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* <Script onLoad={() => themeScript()} /> */}</head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
