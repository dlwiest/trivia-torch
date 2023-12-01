'use client';

import Card from '@/components/global/Card/Card';
import DarkModeToggle from '@/components/global/DarkModeToggle/DarkModeToggle';
import Spinner from '@/components/global/Spinner/Spinner';
import TriviaForm from '@/components/pages/Home/TriviaForm';
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export type TriviaFormInputs = {
    topic?: string;
    difficulty: 'easy' | 'medium' | 'hard';
};

export default function Home() {
    const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

    const generateQuestions = (data: TriviaFormInputs) => {
        if (!isLoadingQuestions) {
            setIsLoadingQuestions(true);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-2 sm:p-24 sm:pt-4 bg-zinc-100 dark:bg-zinc-950">
            <div className="w-full text-right sm:pb-20 invisible sm:visible">
                <DarkModeToggle />
            </div>

            <div className="w-full max-w-3xl text-left mb-4">
                <h1 className="text-4xl text-zinc-700 dark:text-zinc-200 font-semibold">TriviaTorch</h1>
                <span className="text-md text-zinc-500 dark:text-zinc-600">An AI-powered trivia night companion</span>
            </div>
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-7 sm:gap-8">
                <Card className="col-span-3 w-full">
                    <TriviaForm generateQuestions={generateQuestions} />
                </Card>

                <div className="col-span-4 w-full">
                    <div>
                        <div className="invisible md:visible">
                            {!isLoadingQuestions &&
                                <>
                                    <h2 className="text-xl text-zinc-700 dark:text-zinc-200">Next Round</h2>
                                    <div className="text-zinc-500 mt-2 flex items-center">
                                        <ArrowSmallLeftIcon className="w-6 h-6 mr-2" />
                                        <p className="text-md text-zinc-600">Submit the form to generate trivia questions.</p>
                                    </div>
                                </>
                            }
                        </div>

                        {isLoadingQuestions &&
                            <div className="h-48 flex flex-col items-center justify-center">
                                <Spinner />
                                <span className="text-sm mt-2 text-zinc-700">Querying AI...</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
