import { QAItem } from '@/api/generateQuestions';
import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';

const QuestionsListItem = ({ qaItem, order }: { qaItem: QAItem; order: number; }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasMounted(true);
        }, order * 100); // delay in milliseconds

        return () => clearTimeout(timer); // cleanup on unmount
    }, [order]);

    return (
        <Transition
            show={hasMounted}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
        >
            <li className="py-2">
                <p className="text-sm text-md">{qaItem.question}</p>
                <p className="truncate text-xs text-zinc-500 dark:text-zinc-400 mt-2">{qaItem.answer}</p>
            </li>
        </Transition>
    );
};

const QuestionsList = ({ qaItems }: { qaItems: QAItem[]; }) => {
    return (
        <>
            <ul role="list" className="divide-y divide-zinc-300 dark:divide-zinc-800">
                {qaItems.map((q, i) => <QuestionsListItem qaItem={q} order={i} key={i} />)}
            </ul>
        </>
    );
};

export default QuestionsList;