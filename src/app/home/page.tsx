'use client';

import { Transition } from '@headlessui/react';
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid';
import { FireIcon } from '@heroicons/react/24/outline';
import { useGenerateQuestions } from '@/api/generateQuestions';
import Card from '@/components/global/atomic/Card/Card';
import DarkModeToggle from '@/components/global/DarkModeToggle/DarkModeToggle';
import Spinner from '@/components/global/atomic/Spinner';
import TriviaForm from '@/components/pages/Home/TriviaForm';
import QuestionsList from '../../components/pages/Home/QuestionsList';
import KeyButton from '@/components/global/KeyButton/KeyButton';
import ResponseErrorDisplay from '@/components/pages/Home/ResponseErrorDisplay';
import Footer from '@/components/global/Footer/Footer';

export interface TriviaFormInputs {
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
};

const Home = () => {
    const { data: qaItems, error, isLoading: isLoadingQuestions, mutate: requestQuestions } = useGenerateQuestions();

    const generateQuestions = (data: TriviaFormInputs) => {
        if (!isLoadingQuestions) {
            requestQuestions(data);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center pt-2 sm:pt-4">

            {/* Action Buttons */}
            <header className="w-full max-w-4xl flex justify-end pb-4 px-2 sm:px-0 sm:pb-20">
                <div className="flex space-x-2">
                    <KeyButton />
                    <DarkModeToggle />
                </div>
            </header>

            {/* Body */}
            <main className="w-full max-w-4xl grow px-2 sm:px-0">
                <div className="text-center sm:text-left mb-4">
                    <div className="flex items-end justify-center sm:justify-start -ml-2 mt-4 sm:mt-0">
                        <FireIcon className="w-10 h-10 text-red-600 dark:text-red-500" />
                        <h1 className="text-4xl font-semibold">
                            TriviaTorch
                        </h1>
                    </div>
                    <span className="text-md text-zinc-500 dark:text-zinc-400">An AI-powered trivia night companion</span>
                </div>
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-7 sm:gap-8">
                    <Card className="col-span-3 w-full h-64 mb-6">
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
                                {!!qaItems?.length && <h2 className="text-xl font-semibold text-center sm:text-left">Next Round</h2>}
                            </Transition>
                            <QuestionsList qaItems={qaItems && !isLoadingQuestions ? qaItems : []} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;