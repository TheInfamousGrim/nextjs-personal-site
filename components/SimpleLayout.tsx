import { Container } from '@/components/Container';
import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { JsxElement } from 'typescript';

export interface SimpleLayoutTypes extends ComponentPropsWithoutRef<'div'> {
  HighlightedWord?: JSX.Element;
  title?: string;
  intro: string;
  className?: string;
  children: ReactNode;
}

export function SimpleLayout({
  HighlightedWord,
  title,
  intro,
  children,
}: SimpleLayoutTypes) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {HighlightedWord}
          {` ${title}`}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}
