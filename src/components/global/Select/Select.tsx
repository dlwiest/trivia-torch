import React from 'react';

type SelectOption = {
    name: string;
    value?: string | number;
}

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
    options: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ options, ...props }: SelectProps, ref) => (
    <select
        ref={ref}
        className="block w-full rounded-md border-0 py-1.5 text-zinc-600 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-inherit"
        {...props}
    >
        {options.map((o) => <option key={o.value} value={o.value}>{o.name}</option>)}
    </select>
));

Select.displayName = 'Select';

export default Select;
