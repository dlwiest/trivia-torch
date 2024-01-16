import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Button, Label, ListBox, ListBoxItem, Popover, Select as RASelect, SelectValue, Text } from 'react-aria-components';

type SelectOption = {
    name: string;
    value?: string | number;
}

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
    options: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ options, ...props }: SelectProps, ref) => (
    <RASelect onSelectionChange={(s) => { console.log('changed', s )}}>
        <Label />
        <Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <span className="block truncate"><SelectValue /></span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
        </Button>
        <Popover>
            <ListBox className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListBoxItem textValue="easy" id="easy" className={(params) => {
                    console.log('params', params);
                    return '';
                }}>
                    <Text slot="label">Easy</Text>
                </ListBoxItem>

                <ListBoxItem textValue="medium" id="medium">
                    <Text slot="label">Medium</Text>
                </ListBoxItem>

                <ListBoxItem textValue="hard" id="hard">
                    <Text slot="label">Hard</Text>
                </ListBoxItem>
            </ListBox>
        </Popover>
    </RASelect>
/*
    <select
        ref={ref}
        className="block w-full rounded-md border-0 py-1.5 text-zinc-600 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-inherit"
        {...props}
    >
        {options.map((o) => <option key={o.value} value={o.value}>{o.name}</option>)}
    </select>
*/

));

Select.displayName = 'Select';

export default Select;
