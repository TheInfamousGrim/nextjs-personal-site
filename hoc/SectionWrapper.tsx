import { motion } from 'framer-motion';
import { JSXElementConstructor, ReactNode } from 'react';

import { styles } from '@/lib/styles';
import { staggerContainer } from '@/lib/motion';

const StarWrapper = (Component: JSXElementConstructor<any>, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
