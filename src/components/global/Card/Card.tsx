import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className, ...props }: CardProps) => (
    <div className={clsx(className, 'overflow-hidden rounded-lg bg-white dark:bg-zinc-900 shadow')} {...props}>
        <div className="px-4 py-5 sm:p-6 text-zinc-600 dark:text-zinc-400">
            {children}
        </div>
    </div>
);

export default Card;