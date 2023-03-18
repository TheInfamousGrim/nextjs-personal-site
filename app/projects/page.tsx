import { Metadata } from 'next';

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';

/* --------------------------- Logos for projects --------------------------- */
import logoCumulo from '@/public/logos/cumulo.svg';
import logoEcommerceDatabase from '@/public/logos/ecommerce-database.svg';
import logoFakebook from '@/public/logos/fakebook.svg';
import logoMongoSocialAPI from '@/public/logos/mongo-social-api.svg';
import logoTenzie from '@/public/logos/tenzie.svg';

/* --------------------------- images for projects -------------------------- */
import screenshotCumulo from '@/public/assets/projects/cumulo.png';
import screenshotEcommerceDatabase from '@/public/assets/projects/api-ecommerce.png';
import screenshotFakebook from '@/public/assets/projects/fakebook.png';
import screenshotMongoSocialAPI from '@/public/assets/projects/social-network.png';
import screenshotTenzie from '@/public/assets/projects/tenzies.png';

import { projectsTest } from '@/lib/constants';

const projectsTest2 = [
  {
    name: 'Fakebook',
    description:
      'A facebook clone I was project lead on for my fullstack web development course. A full MERN stack application made with a graphQL API.',
    tags: [
      {
        name: 'React',
        color: 'text-aquamarine',
      },
      {
        name: 'Express',
        color: 'text-emerald-500',
      },
      {
        name: 'GraphQL',
        color: 'text-bright-pink',
      },
      {
        name: 'Apollo',
        color: 'text-indigo-300',
      },
      {
        name: 'MongoDB',
        color: 'text-green-600',
      },
      {
        name: 'Tailwind',
        color: 'text-sky-500',
      },
    ],
    image: screenshotFakebook,
    logo: logoFakebook,
    sourceCodeLink: 'https://github.com/TheInfamousGrim/Fakebook',
  },
  {
    name: 'Tenzie Game',
    description:
      'A fun game of tenzies I made with ReactJS 🎲. This is where I was whetting my whistle with framer motion and making something with a fair bit of React logic.',
    tags: [
      {
        name: 'React',
        color: 'text-aquamarine',
      },
      {
        name: 'Vite',
        color: 'text-indigo-300',
      },
      {
        name: 'Tailwind',
        color: 'text-sky-500',
      },
      {
        name: 'Framermotion',
        color: 'text-fuchsia-500',
      },
    ],
    image: screenshotTenzie,
    logo: logoTenzie,
    sourceCodeLink: 'https://github.com/TheInfamousGrim/Tenzies-Game-React',
  },
  {
    name: 'MongoDB Social Network API',
    description:
      'A groovy lil API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list.',
    tags: [
      {
        name: 'nodejs',
        color: 'text-emerald-500',
      },
      {
        name: 'MongoDB',
        color: 'text-green-500',
      },
      {
        name: 'mongoose',
        color: 'text-rose-300',
      },
      {
        name: 'Express',
        color: 'text-green-500',
      },
    ],
    image: screenshotMongoSocialAPI,
    logo: logoMongoSocialAPI,
    sourceCodeLink:
      'https://github.com/TheInfamousGrim/NoSQL-Social-Network-API',
  },
  {
    name: 'Ecommerce Server',
    description:
      'A complete backend server for an ecommerce store. I actually enjoyed this one a lot, building a pretty awesome backend that used Sequelize as the ORM.',
    tags: [
      {
        name: 'nodejs',
        color: 'text-emerald-500',
      },
      {
        name: 'Express',
        color: 'text-green-500',
      },
      {
        name: 'MySQL',
        color: 'text-cyan-600',
      },
      {
        name: 'Sequelize',
        color: 'text-aquamarine',
      },
    ],
    image: screenshotEcommerceDatabase,
    logo: logoEcommerceDatabase,
    sourceCodeLink:
      'https://github.com/TheInfamousGrim/orm-e-commerce-back-end',
  },
  {
    name: 'Cumulo',
    description:
      'A neat weather dashboard to show the weather in your location as well as one that is searched. An earlier project of mine that was when I was first getting the hang of working with APIs in JavaScript.',
    tags: [
      {
        name: 'JavaScript',
        color: 'text-sunglow',
      },
      {
        name: 'Materialize',
        color: 'text-crayola',
      },
      {
        name: 'jQuery',
        color: 'text-aquamarine',
      },
    ],
    image: screenshotCumulo,
    logo: logoCumulo,
    sourceCodeLink:
      'https://github.com/TheInfamousGrim/cumulo-weather-dashboard',
  },
];

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
      'A groovy lil API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.',
    link: {
      href: 'https://github.com/TheInfamousGrim/NoSQL-Social-Network-API',
      label: 'github.com',
    },
    logo: logoMongoSocialAPI,
  },
  {
    name: 'Ecommerce Server',
    description: 'A complete backend server for an ecommerce store',
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

function HighLightedWord() {
  return (
    <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
      Projects:
    </span>
  );
}

export const metadata: Metadata = {
  title: 'Projects',
  description: `All the cool stuff I've worked on as a web dev`,
};

export default function Projects() {
  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title="All the groovy projects that I've made over the years"
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Check out the repos and live links if you like them 🥰."
    >
      <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {projectsTest2.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SimpleLayout>
  );
}
