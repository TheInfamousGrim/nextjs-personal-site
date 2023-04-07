// Dependencies
import { Metadata } from 'next';

// Components
import { Container } from '@/components/Container';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import TechSection from '@/components/techSection/TechSection';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'My experience as a web developer and a working professional',
  openGraph: {
    title: 'Experience | GrimFunky',
    description: 'My experience as a web developer and working professional',
    url: 'https://grimfunky.dev/experience',
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
    title: 'Experience | GrimFunky',
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

export default function Experience() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {`All The Cool Stuff I've `}
            <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
              Experienced
            </span>{' '}
            Along The Way
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {`A few more snippets about my education and how much I've picked up
            along the way .`}
          </p>
        </div>
      </Container>
      <Container className="mt-20 flex flex-col">
        <ExperienceTimeline />
      </Container>
      <Container className="mt-16">
        <TechSection />
      </Container>
    </>
  );
}
