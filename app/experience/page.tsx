'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import Image from 'next/image';

import 'react-vertical-timeline-component/style.min.css';

import logoGSA from '@/public/logos/gsa.svg';
import logoKomo from '@/public/logos/komo.svg';
import logoAandF from '@/public/logos/A&F.svg';
import logoUOB from '@/public/logos/university-of-birmingham.svg';
import { textVariant } from '@/lib/motion';

// Components
import { Container } from '@/components/Container';

// HOC
import { SectionWrapper } from '@/hoc';
import Tech from '@/components/Tech';

const experiences = [
  {
    title: '💀 Acting Student 🎭',
    company_name: 'Guildford School of Acting',
    icon: logoGSA,
    iconBg: '#000000',
    date: 'Sep 2018 - Jul 2020',
    points: [
      'Top drama school in the country.',
      'Rigourous study and rehearsal periods of up 60-70 hours a week.',
      'Gained a great understanding of Laban, Meisner, Adler and countless other practitioners and their praxis.',
      'Made some life long friends in the acing industry that I cherish to this day.',
    ],
  },
  {
    title: '🍹 Bar Manager and Mixologist ⚗️',
    company_name: 'Komo Cocktail Bar',
    icon: logoKomo,
    iconBg: '#20271f',
    date: 'Sep 2019 - Aug 2021',
    points: [
      'Started as a part time bar tender, working my way up to Bar Manager and Mixologist.',
      'In charge of menu creation, cash up, staff hours, training and entertainment.',
      'Taught masterclasses on cocktails and even managed to teach the cast of Made in Chelsea.',
      'Fire breathing became my forte 😤🔥.',
    ],
  },
  {
    title: '💽 Junior IT Executive 👨‍💼',
    company_name: 'Aston & Fincher',
    icon: logoAandF,
    iconBg: '#ffffff',
    date: 'Aug 2021 - Present',
    points: [
      'Built the company intranet from the ground up using SharePoint.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create quality interfaces for Barbers, Hairdressers and beauticians across the country.',
      'Primary job is designing, developing and maintaining the company intranet.',
      'Help to integrate and develope other technical products such as sharepoint virtual tours and learning platforms for our customers.',
    ],
  },
  {
    title: '🧑‍💻 Fullstack Web Dev Student 🐛',
    company_name: 'University of Birmingham',
    icon: logoUOB,
    iconBg: '#605270',
    date: 'Jun 2022 - Dec 2022',
    points: [
      'Became proficient in a vast array of web technologies and tools such as HTML, CSS, JavaScript, Tailwind, React, MySQL, MongoDB and much more.',
      'Lead all 3 group projects, helping to deliver aesthetic, performant applications that I am still tinkering with today.',
      'Was always willing to help out after hours with anyone that was struggling on the course.',
      'Further developed my love and passion for web dev 💖.',
    ],
  },
];

interface ExperienceTypes {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}

function ExperienceCard({ experience }: { experience: ExperienceTypes }) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#FB6A82', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #fb6a82' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="py-5">
        <h3 className="text-xl font-semibold leading-6 text-zinc-100">
          {experience.title}
        </h3>
        <p
          className="mt-1 max-w-2xl text-sm font-thin text-zinc-300"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <div className="border-t border-aquamarine px-4 py-5 sm:p-0">
        <ul className="mt-5 ml-5 list-disc space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 pl-1 text-[14px] tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}

function Experience() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <motion.div className="max-w-2xl" variants={textVariant()}>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            All The Cool Stuff I've{' '}
            <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
              Experienced
            </span>{' '}
            Along The Way
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A few more snippets about my education and how much I've picked up
            along the way .
          </p>
        </motion.div>
      </Container>
      <Container className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#00FFAB">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Container>
      <Container className="mt-16">
        <motion.div className="maz-w-2xl" variants={textVariant()}>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Some of the Juicy Languages, Frameworks and Software I Use
          </h2>
        </motion.div>
        <Tech />
      </Container>
    </>
  );
}

export default SectionWrapper(Experience, 'work');
