import { useKeyModal } from '@/context/KeyModalProvider';
import { KeyIcon } from '@heroicons/react/24/outline';

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