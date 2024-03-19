'use client';

import { Transition } from '@headlessui/react';
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid';
import { useGenerateQuestions } from '@/api/generateQuestions';
import Card from '@/components/global/atomic/Card/Card';
import DarkModeToggle from '@/components/global/DarkModeToggle/DarkModeToggle';
import Spinner from '@/components/global/atomic/Spinner';
import TriviaForm from '@/components/pages/Home/TriviaForm';
import QuestionsList from '../../components/pages/Home/QuestionsList';
import KeyButton from '@/components/global/KeyButton/KeyButton';
import ResponseErrorDisplay from '@/components/pages/Home/ResponseErrorDisplay';

export interface TriviaFormInputs {
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
};

const Home = () => {
    const { data: qaItems, error, isLoading: isLoadingQuestions, mutate: requestQuestions } = useGenerateQuestions();

    console.log('front end got an error back', error);

    const generateQuestions = (data: TriviaFormInputs) => {
        if (!isLoadingQuestions) {
            requestQuestions(data);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-2 sm:p-24 sm:pt-4">
            <div className="w-full flex justify-end sm:pb-20 invisible sm:visible">
                <div className="flex space-x-2">
                    <KeyButton />
                    <DarkModeToggle />
                </div>
            </div>

            <div className="w-full max-w-3xl text-left mb-4">
                <h1 className="text-4xl font-semibold">TriviaTorch</h1>
                <span className="text-md text-zinc-500 dark:text-zinc-400">An AI-powered trivia night companion</span>
            </div>
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-7 sm:gap-8">
                <Card className="col-span-3 w-full h-64">
                    <TriviaForm generateQuestions={generateQuestions} />
                </Card>

                <div className="col-span-4 w-full">
                    <div>
                        {!isLoadingQuestions && !qaItems && !error &&
                            <div className="invisible md:visible">
                                <>
                                    <div className="text-zinc-600 dark:text-zinc-400 mt-2 flex items-center">
                                        <ArrowSmallLeftIcon className="w-8 h-8 mr-1" />
                                        <p className="text-md">Submit the form to generate trivia questions.</p>
                                    </div>
                                </>
                            </div>
                        }

                        <Transition
                            show={isLoadingQuestions}
                            enter="transition-opacity duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <div className="h-48 flex flex-col items-center justify-center">
                                <Spinner />
                                <span className="text-sm mt-2 text-zinc-600 dark:text-zinc-500">Researching...</span>
                            </div>
                        </Transition>

                        <Transition
                            show={!isLoadingQuestions && !!error}
                            enter="transition-opacity duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            <ResponseErrorDisplay errorType={error ? error.toString() : ''} />
                        </Transition>

                        <Transition
                            show={!isLoadingQuestions && !!qaItems?.length}
                            enter="transition-opacity duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                        >
                            {!!qaItems?.length && <h2 className="text-xl font-semibold">Next Round</h2>}
                        </Transition>
                        <QuestionsList qaItems={qaItems && !isLoadingQuestions ? qaItems : []} />
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Home;