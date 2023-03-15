import Image from 'next/image';
import { Metadata } from 'next';

import { Card } from '@/components/Card';
import { SimpleLayout } from '@/components/SimpleLayout';

import logoOpenShuttle from '@/public/logos/open-shuttle.svg';
import logoCumulo from '@/public/logos/cumulo.svg';
import logoEcommerceDatabase from '@/public/logos/ecommerce-database.svg';
import logoFakebook from '@/public/logos/fakebook.svg';
import logoMongoSocialAPI from '@/public/logos/mongo-social-api.svg';
import logoTenzie from '@/public/logos/tenzie.svg';

const projects = [
  {
    name: 'Fakebook',
    description: 'A facebook clone I was project lead on for my course.',
    link: {
      href: 'https://github.com/TheInfamousGrim/Fakebook',
      label: 'github.com',
    },
    logo: logoFakebook,
  },
  {
    name: 'Tenzie Game',
    description: 'A fun game of tenzies I made.',
    link: {
      href: 'https://tenzies-game-react-ten.vercel.app/',
      label: 'github.com',
    },
    logo: logoTenzie,
  },
  {
    name: 'Mongo Social Network API',
    description:
      'A groovy lil API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list..',
    link: {
      href: 'https://github.com/TheInfamousGrim/NoSQL-Social-Network-API',
      label: 'github.com',
    },
    logo: logoMongoSocialAPI,
  },
  {
    name: 'Ecommerce Server',
    description: 'A complete backend server for an exommerce store',
    link: {
      href: 'https://github.com/TheInfamousGrim/orm-e-commerce-back-end',
      label: 'github.com',
    },
    logo: logoEcommerceDatabase,
  },
  {
    name: 'Cumulo',
    description:
      'A neat weather dashboard to show the weather in your location as well as one that is searched',
    link: {
      href: 'https://github.com/TheInfamousGrim/cumulo-weather-dashboard',
      label: 'github.com',
    },
    logo: logoCumulo,
  },
];

interface LinkIconProps {
  className: string;
}

function LinkIcon(props: LinkIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: `All the cool stuff I've worked on as a web dev`,
};

export default function Projects() {
  return (
    <SimpleLayout
      title="All the groovy projects that I've made over the years"
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Check out the repos and live links if you like them 🥰."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card Component="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
