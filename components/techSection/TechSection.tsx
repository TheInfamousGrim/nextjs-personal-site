// Dependencies
import { motion } from 'framer-motion';

// Components
import Tech from './Tech';

// HOC
import { SectionWrapper } from '@/hoc';

// Framer motion variants
import { slideIn } from '@/lib/motion';

function TechSection() {
  return (
    <>
      <motion.div
        className="maz-w-2xl"
        variants={slideIn('left', 'tween', 0.2, 1)}
      >
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Some Of The Juicy{' '}
          <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-4xl text-transparent sm:text-5xl">
            Languages,
          </span>{' '}
          <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-4xl text-transparent sm:text-5xl">
            Frameworks,
          </span>{' '}
          And{' '}
          <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-4xl text-transparent sm:text-5xl">
            Software
          </span>{' '}
          I Use
        </h2>
      </motion.div>
      <Tech />
    </>
  );
}

export default SectionWrapper(TechSection, 'tech-section');
