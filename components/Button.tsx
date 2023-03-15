'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { ReactNode, useRef, useEffect } from 'react';

// Custom Css
import styles from './Button.module.css';

export interface VariantStyleTypes {
  primary: string;
  secondary: string;
}

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
};

export interface ButtonTypes {
  variant?: string;
  className?: string;
  href?: string;
  text?: string;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export function Button({
  variant = 'primary',
  className,
  href,
  text,
  icon,
  type,
  ...props
}: ButtonTypes) {
  const glowEffect = styles['glow-effect'];
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    glowEffect,
    variantStyles[variant as keyof VariantStyleTypes],
    className
  );

  // Get a reference of the buttons computed styles
  let buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null!);

  useEffect(() => {
    // Get the curr
    const buttonStyles =
      buttonRef.current && getComputedStyle(buttonRef.current);

    const glowLines = buttonRef.current.querySelectorAll('rect');
    const rx = buttonStyles.borderRadius;

    glowLines.forEach((line) => {
      line.setAttribute('rx', rx);
    });
  }, []);

  return href ? (
    <Link ref={buttonRef} href={href} className={className} {...props}>
      {text}
      {icon}
      <svg className={styles['glow-container']} data-glow-offset={true}>
        <rect
          pathLength={100}
          strokeLinecap="round"
          className={styles['glow-blur']}
        ></rect>
        <rect
          pathLength={100}
          strokeLinecap="round"
          className={styles['glow-line']}
        ></rect>
      </svg>
    </Link>
  ) : (
    <button ref={buttonRef} className={className} type={type} {...props}>
      {text}
      {icon}
      <svg className={styles['glow-container']} data-glow-offset={true}>
        <rect
          pathLength={100}
          strokeLinecap="round"
          className={styles['glow-blur']}
        ></rect>
        <rect
          pathLength={100}
          strokeLinecap="round"
          className={styles['glow-line']}
        ></rect>
      </svg>
    </button>
  );
}
