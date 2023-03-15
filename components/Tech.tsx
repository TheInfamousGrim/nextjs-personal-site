'use client';

import { SectionWrapper } from '@/hoc';
import BallCanvas from './canvas/Ball';

import { technologies } from '@/lib/constants';

interface TechnologyTypes {
  name: string;
  icon: any;
}

function Tech() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology: TechnologyTypes) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
}

export default SectionWrapper(Tech, '');
