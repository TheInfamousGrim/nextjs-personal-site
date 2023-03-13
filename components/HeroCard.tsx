'use client';

import { useMotionValue, useTransform, motion } from 'framer-motion';

export default function HeroCard() {
  const subtitle =
    "Awesome development doesn't happen over night, it takes a lotta hard work and determination";

  // Framer values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Creates a word wrapped in a span class with a delay
  function createWord(text: string, index: number) {
    return (
      <span
        className="card-subtitle-word"
        style={{ transitionDelay: `${index * 40}ms` }}
      >
        {text}
      </span>
    );
  }

  // function creates the whole subtitle
  function createSubtitle(subtitle: string) {
    const splitWords = subtitle
      .split(' ')
      .map((word, index) => createWord(word, index));

    return <>{splitWords}</>;
  }

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className="card relative h-96 w-full cursor-pointer rounded-lg"
      >
        <div className="h-full overflow-hidden">
          <div className="card-content">
            <h3 className="text-4xl font-semibold text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I can synthesize the most sumptuous s**t
            </h3>
            <h4 className="card-subtitle mt-2 text-3xl text-zinc-100 sm:text-4xl">
              {createSubtitle(subtitle)}
            </h4>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
