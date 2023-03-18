import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  DiscordIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/public/Headshot_2020.jpg';
import avatarImage from '@/public/GrimFunk-psychadelic.png';
import { ReactNode } from 'react';

interface SocialLinkTypes {
  className: string;
  href: string;
  children: ReactNode;
  Icon: ReactNode;
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: SocialLinkTypes) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-aquamarine dark:text-zinc-200"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'The names George Fincher, sometimes known as GrimFunky. I live in Birmingham, where I weave web dev magic',
};

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Portrait photo of George Fincher, aka GrimFunky"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>

          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Names{' '}
              <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
                George Fincher
              </span>
              , I Live in Birmingham, Where I Weave Web Dev Magic.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I like to think I've lived a storied life. I went to university
                initially to study a masters in physics & came out with a
                bachelors in film, drama, philosophy and mathematics and then
                went on achieve an MFA in acting at Guildford School of Acting
              </p>
              <p>
                The pandemic was brutal, we all know that. It made me rethink
                acting, so I got three separate jobs in the midst of all the
                madness. But with determination, I ventured back into the realm
                of programming.
              </p>
              <p>
                My programming journey earnestly began in 2020, with my first
                attempt at learning python. I gave up after a few months due to
                the 80 hour work weeks and lack of free time...
              </p>
              <p>
                In 2021 I realized I needed a goal, so I swapped languages to
                HTML, CSS & Javascript so that I could build web applications &
                fuel my learning with the dream of becoming a web developer.
              </p>
              <p>
                2022 came around and I was still no closer to becoming a web
                developer. So I did what I thought was the best thing, I
                enrolled at a boot camp at the University of Birmingham where I
                went on to finish top of the class which leads us delightfully
                to the present.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list" className="border-t border-aquamarine pt-8">
              <SocialLink
                href="https://twitter.com/GrimFunk69"
                icon={TwitterIcon}
              >
                @GrimFunk69
              </SocialLink>
              <SocialLink
                href="https://github.com/TheInfamousGrim"
                icon={GitHubIcon}
                className="mt-4"
              >
                @TheInfamousGrim
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/george-fincher-aa7869214/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                @george-fincher-aa7869214
              </SocialLink>
              <SocialLink
                href="https://www.discordapp.com/users/GrimFunk#8985"
                icon={DiscordIcon}
                className="mt-4"
              >
                @GrimFunk#8985
              </SocialLink>
              <SocialLink
                href="mailto:finchergeorge1@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-aquamarine pt-8"
              >
                finchergeorge1@gmail.com
              </SocialLink>
            </ul>
            <div className="mt-8 border-t border-aquamarine pt-8">
              <div className="max-w-xs lg:max-w-none">
                <Image
                  src={avatarImage}
                  alt="Stylized vaporwave portrait of a skull floating above an island"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
