// Dependencies
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Components
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import HeroCard from '@/components/HeroCard';
import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../components/SocialIcons';

// Logos
import logoAAndF from '../public/logos/A&F.svg';
import logoKomo from '../public/logos/komo.svg';
import logoUOB from '../public/logos/university-of-birmingham.svg';
import logoGSA from '../public/logos/gsa.svg';
import logoUOE from '../public/logos/university-of-exeter.svg';
import logoBuckland from '../public/logos/west-buckland.svg';

interface IconProps {
  className?: string;
}

function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-sunglow"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-sunglow"
      />
    </svg>
  );
}

function BriefcaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-bright-pink"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-bright-pink"
      />
    </svg>
  );
}

function AcademicCap(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-zinc-100 stroke-aquamarine"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}

function ArrowDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SocialLinkProps = {
  href?: string;
};

function SocialLink({
  icon: Icon,
  ...props
}: {
  icon: JSX.Element;
  props: SocialLinkProps;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-aquamarine dark:fill-zinc-400" />
    </Link>
  );
}

function GetInContact() {
  return (
    <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
      <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Get In Contact</span>
      </h2>
      <p className="mt-2 rounded-md bg-[#ffffff33] p-2 text-sm text-zinc-300 backdrop-blur-[10px]">
        If you'd like to contact me, follow the link below and fill out the form
        😁.
      </p>
      <Button
        href="/contact"
        variant="primary"
        text="Contact"
        type="button"
        className="mt-6 w-full"
      ></Button>
    </div>
  );
}

function Resume() {
  let resume = [
    {
      company: 'Aston & Fincher',
      title: 'Junior IT Executive',
      logo: logoAAndF,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Komo',
      title: 'Bar Manager',
      logo: logoKomo,
      start: '2019',
      end: '2021',
    },
  ];

  return (
    <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
      <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li
            key={roleIndex}
            className="flex gap-4 rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px]"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-200">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-300">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400"
                aria-label={`${role.start} until ${role.end.label ?? role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://docs.google.com/document/d/1tEmQaS4c8bL4XMCJ6XHtqHHp7zL62VOazIOmlQnm618/edit"
        variant="primary"
        className="group mt-6 w-full"
        text="Download CV"
        icon={ArrowDownIcon({
          className:
            'h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50',
        })}
      ></Button>
    </div>
  );
}

function Education() {
  let education = [
    {
      school: 'University of Birmingham',
      course: 'Fullstack Web Development Bootcamp',
      grade: '94.71%',
      logo: logoUOB,
      start: '2022',
      end: '2022',
    },
    {
      school: 'Guildford School of Acting',
      course: 'Masters of Fine Arts: Acting',
      grade: 'First',
      logo: logoGSA,
      start: '2019',
      end: '2021',
    },
    {
      school: 'University of Exeter',
      course: 'Drama, Film, Mathematics & Philosophy',
      grade: '2:1',
      logo: logoUOE,
      start: '2014',
      end: '2018',
    },
    {
      school: 'West Buckland',
      course: 'Physics | Mathematics & Mechanics | Chemistry',
      grade: 'A* | A | A',
      logo: logoBuckland,
      start: '2005',
      end: '2014',
    },
  ];

  return (
    <div className="rounded-2xl border border-aquamarine bg-space-cadet bg-topography-aquamarine p-6">
      <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
        <AcademicCap className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <li
            key={roleIndex}
            className="flex gap-4 rounded-md bg-[#ffffff33] p-2 shadow-md backdrop-blur-[10px]"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-col flex-wrap gap-x-2">
              <dt className="sr-only">University</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-100">
                {role.school}
              </dd>
              <dt className="sr-only">Course</dt>
              <dd className="text-xs text-zinc-300">{role.course}</dd>
              <dt className="sr-only">Grade</dt>
              <dd className="text-xs text-zinc-300">{role.grade}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="block text-xs text-zinc-400"
                aria-label={`${role.start} until ${role.end.label ?? role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home',
  description:
    'George Fincher, a fullstack web developer specializing in React and Next.js applications, based in Birmingham, UK.',
};

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Developer, Designer, and Lover of Dress-Up and Make
            <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
              Believe
            </span>
            .
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m George Fincher, a fullstack web developer specializing in React
            and Next.js applications, based in Birmingham, UK. I’m a Junior IT
            Executive at Aston & Fincher, where I design, develop and implement
            our internal IT infrastructure and integrate software that serves
            barbers, hairdressers and beauticians with the products they need
            across the UK.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/GrimFunk69"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/TheInfamousGrim"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/george-fincher-aa7869214/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://www.discordapp.com/users/GrimFunk#8985"
              aria-label="Follow on Discord"
              icon={DiscordIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-9">
        <HeroCard />
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <Education />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <GetInContact />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
