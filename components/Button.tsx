'use client';

import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { ReactNode, useRef, useEffect, LinkHTMLAttributes } from 'react';

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
  onClick?: () => void;
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
  let buttonRef = useRef<HTMLButtonElement>(null);
  let linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let buttonStyles;
    let glowLines;
    let rx: string;

    if (buttonRef.current) {
      // Get the current button styles
      buttonStyles = buttonRef.current && getComputedStyle(buttonRef.current);
      // Select the glowing lines svg
      glowLines = buttonRef.current.querySelectorAll('rect');
      // Save the new rx value as the current border radius
      rx = buttonStyles.borderRadius;
      // Update the new rx value for each button
      glowLines.forEach((line) => {
        line.setAttribute('rx', rx);
      });
    }
    if (linkRef.current) {
      // Get the current button styles
      buttonStyles = linkRef.current && getComputedStyle(linkRef.current);
      // Select the glowing lines svg
      glowLines = linkRef.current.querySelectorAll('rect');
      // Save the new rx value as the current border radius
      rx = buttonStyles.borderRadius;
      // Update the new rx value for each button
      glowLines.forEach((line) => {
        line.setAttribute('rx', rx);
      });
    }
  }, []);

  if (href) {
    return (
      <Link ref={linkRef} href={href} className={className} {...props}>
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
    );
  } else {
    return (
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
}
