import { Metadata } from 'next';

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';

/* --------------------------- Logos for projects --------------------------- */
import logoCumulo from '@/public/logos/cumulo.svg';
import logoEcommerceDatabase from '@/public/logos/ecommerce-database.svg';
import logoFakebook from '@/public/logos/fakebook.svg';
import logoGsf from '@/public/logos/gsf-logo.svg';
import logoMongoSocialAPI from '@/public/logos/mongo-social-api.svg';
import logoTenzie from '@/public/logos/tenzie.svg';
import logoTwooter from '@/public/logos/twooter.svg';

/* --------------------------- images for projects -------------------------- */
import screenshotCumulo from '@/public/assets/projects/cumulo.png';
import screenshotEcommerceDatabase from '@/public/assets/projects/api-ecommerce.png';
import screenshotFakebook from '@/public/assets/projects/fakebook.png';
import screenshotGsfTradeApp from '@/public/assets/projects/gsf-trade-app.png';
import screenshotMongoSocialAPI from '@/public/assets/projects/social-network.png';
import screenshotTenzie from '@/public/assets/projects/tenzies.png';
import screenshotTwooter from '@/public/assets/projects/twooter-t3.png';

const professionalProjects = [
  {
    name: 'GSF Trade App',
    description:
      'A full stack nextjs app for use by mechanic and trade customers as well as our branch staff. Users can view selected car information, applicated car parts, orders, invoices and much more.',
    tags: [
      {
        name: 'JavaScript',
        color: 'text-sunglow',
      },
      {
        name: 'TypeScript',
        color: 'text-blue-400',
      },
      {
        name: 'React',
        color: 'text-aquamarine',
      },
      {
        name: 'NextJS',
        color: 'text-black',
      },
      {
        name: 'MySQL',
        color: 'text-cyan-600',
      },
      {
        name: 'Zustand',
        color: 'text-black',
      },
    ],
    image: screenshotGsfTradeApp,
    logo: logoGsf,
    appLink: 'https://trade.gsfcarparts.com/',
  },
  {
    name: 'GSF API',
    description:
      'A RESTful API for use by the NextJs GSF Trade App, National Accounts such as Kwik Fit and Halfords, and other external and internal applications.',
    tags: [
      {
        name: 'C#',
        color: 'text-purple-400',
      },
      {
        name: 'ASP.NET Core',
        color: 'text-violet-400',
      },
      {
        name: 'MySQL',
        color: 'text-cyan-600',
      },
      {
        name: 'Swagger',
        color: 'text-lime-400',
      },
    ],
    image: screenshotEcommerceDatabase,
    logo: logoGsf,
  },
];

const personalProjects = [
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
    name: 'Twooter',
    description:
      'A twitter clone made using the t3 stack. I loved working on this one as I got a deep dive on how mono repos work and it was my first time using tRPC as an API',
    tags: [
      {
        name: 'TypeScript',
        color: 'text-blue-400',
      },
      {
        name: 'React',
        color: 'text-aquamarine',
      },
      {
        name: 'NextJS',
        color: 'text-black',
      },
      {
        name: 'tRPC',
        color: 'text-aquamarine',
      },
      {
        name: 'MySQL',
        color: 'text-cyan-600',
      },
      {
        name: 'Redis',
        color: 'text-red-600',
      },
    ],
    image: screenshotTwooter,
    logo: logoTwooter,
    sourceCodeLink: 'https://github.com/TheInfamousGrim/twitter-t3-clone',
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
      title="All The Groovy Things That I've Made Over The Years"
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Check out the repos and live links if you like them 🥰."
    >
      <h2 className="text-4xl font-semibold text-aquamarine sm:text-5xl">
        Professional Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <h2 className="mt-10 text-4xl font-semibold text-bright-pink sm:text-5xl">
        Personal Projects
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {personalProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SimpleLayout>
  );
}
