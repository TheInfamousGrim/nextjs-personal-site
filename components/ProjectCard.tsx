'use client';

import Tilty from 'react-tilty';
import { motion } from 'framer-motion';
import { github } from '@/public/assets';
import { fadeIn } from '@/lib/motion';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type TagTypes = {
  name: string;
  color: string;
};

type ProjectCardTypes = {
  index: number;
  name: string;
  description: string;
  tags: TagTypes[];
  image: StaticImageData;
  logo: StaticImageData;
  sourceCodeLink?: string;
  appLink?: string;
};

type LinkIconProps = {
  className: string;
};

function LinkIcon(props: LinkIconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="white"
      />
    </svg>
  );
}

export default function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  logo,
  sourceCodeLink,
  appLink,
}: ProjectCardTypes) {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className="group relative flex h-full flex-col items-start rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-5 shadow-xl">
        <div className="relative h-[230px] w-full">
          <img
            src={image.src}
            alt="project image"
            className="h-full w-full rounded-2xl object-cover"
          />

          <div className="absolute inset-0 m-3 flex justify-end">
            {sourceCodeLink && (
              <Link
                href={sourceCodeLink}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-slate-600 to-slate-900 transition-all duration-200 ease-in hover:h-12 hover:w-12"
              >
                <img
                  src={github.src}
                  alt="source code"
                  className="h-5/6 w-5/6 object-contain"
                />
                <h3 className="sr-only">
                  Link to {name} source code on GitHub
                </h3>
              </Link>
            )}
            {appLink && (
              <Link
                href={appLink}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-slate-600 to-slate-900 transition-all duration-200 ease-in hover:h-12 hover:w-12"
              >
                <LinkIcon className="h-5/6 w-5/6 object-contain" />
                <h3 className="sr-only">Link to {name} app</h3>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-5 rounded-md bg-[#ffffff33] p-1 backdrop-blur-[10px]">
          <h3 className="flex justify-between text-[24px] font-bold text-zinc-100">
            <p className="max-w-[200px]">{name} </p>
            <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <img src={logo.src} alt="project logo" className="h-6 w-6" />
            </div>
          </h3>
          <p className="text-secondary mt-2 text-[14px] text-zinc-200">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 rounded-md bg-[#ffffff33] p-1 text-center backdrop-blur-[10px]">
          {tags.map((tag, index) => (
            <>
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                {tag.name}
              </p>
              <p className="text-white">{index !== tags.length - 1 && '|'}</p>
            </>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
