import { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

interface SubContainerProps {
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export type Ref = HTMLDivElement;

const OuterContainer = forwardRef<Ref, SubContainerProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

const InnerContainer = forwardRef<Ref, SubContainerProps>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

export interface ContainerProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Container = forwardRef<
  Ref,
  { children?: ReactNode; props: ContainerProps }
>(function Container({ children, ...props }, ref) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
});

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
