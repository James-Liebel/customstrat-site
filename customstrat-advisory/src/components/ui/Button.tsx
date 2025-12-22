'use client';

import * as React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

function cx(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(' ');
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl font-semibold ' +
  'transition-transform transition-colors duration-200 ease-out-quint ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ' +
  'ring-offset-white disabled:pointer-events-none disabled:opacity-50 ' +
  'select-none will-change-transform';

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-sm md:text-base',
  lg: 'h-12 md:h-14 px-7 md:px-8 text-base',
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-br from-primary to-accent text-white shadow-soft-md ' +
    'hover:shadow-soft-lg hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-white text-primary border border-primary/25 shadow-soft ' +
    'hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-soft-md active:translate-y-0',
  outline:
    'bg-transparent text-slate-900 border border-slate-200 ' +
    'hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0',
  ghost:
    'bg-transparent text-slate-700 ' +
    'hover:bg-slate-50 hover:text-slate-900 active:bg-slate-100',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const classes = cx(base, sizes[size], variants[variant], className);

    if (asChild) {
      // Allows <Button asChild><Link .../></Button> without extra wrappers.
      if (!React.isValidElement(children)) return null;
      const child = children as React.ReactElement<any>;
      return React.cloneElement(child, {
        className: cx(child.props.className, classes),
      });
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
