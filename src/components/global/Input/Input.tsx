import React from 'react';
import { Input as RAInput } from 'react-aria-components';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
    id?: string;
    name?: string;
    placeholder?: string;
    type?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...props }: InputProps, ref) => (
    <RAInput
        ref={ref}
        className="block w-full rounded-md border-0 py-1.5 text-zinc-600 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-inherit"
        { ...props }
    />
));

Input.displayName = 'Input';

export default Input;