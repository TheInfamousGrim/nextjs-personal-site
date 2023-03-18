'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children?: ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  let isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={clsx(
        'transition',
        isActive ? 'text-aquamarine' : 'hover:text-aquamarine'
      )}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-bright-pink pt-10 pb-16">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/uses">Uses</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                Made with ❤️ by <span className="text-aquamarine">Grim</span>
                <span className="text-bright-pink">Funk</span>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
