import { useKeyModal } from '@/app/context/KeyModalProvider';

const KeyIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
    return (
        <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
        </svg>
    );
};

const KeyButton = () => {
    const { toggleModal } = useKeyModal();
    
    return (
        <button
            type="button"
            aria-label="OpenAI API Key"
            className="group rounded-full bg-white px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={() => toggleModal()}
        >
            <KeyIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:group-hover:fill-teal-400/20 dark:group-hover:stroke-teal-400 dark:fill-teal-400/10 dark:stroke-teal-500" />
        </button>
    );
};

export default KeyButton;