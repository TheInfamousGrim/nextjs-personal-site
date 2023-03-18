'use client';

import Tilty from 'react-tilty';
import { motion } from 'framer-motion';
import { github } from '@/public/assets';
import { fadeIn } from '@/lib/motion';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface TagTypes {
  name: string;
  color: string;
}

interface ProjectCardTypes {
  index: number;
  name: string;
  description: string;
  tags: TagTypes[];
  image: StaticImageData;
  logo: StaticImageData;
  sourceCodeLink: string;
}

export default function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  logo,
  sourceCodeLink,
}: ProjectCardTypes) {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilty
        max={45}
        scale={1}
        speed={450}
        className="group relative flex flex-col items-start rounded-2xl bg-space-cadet p-5 shadow-xl"
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image.src}
            alt="project image"
            className="h-full w-full rounded-2xl object-cover"
          />

          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <Link
              href={sourceCodeLink}
              //   onClick={() => window.open(sourceCodeLink, '_blank')}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-slate-600 to-slate-900"
            >
              <img
                src={github.src}
                alt="source code"
                className="h-5/6 w-5/6 object-contain"
              />
            </Link>
          </div>
        </div>

        <div className="mt-5">
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

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilty>
    </motion.div>
  );
}