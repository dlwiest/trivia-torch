import { useMutation, UseMutationResult } from 'react-query';

interface PostQuestionParams {
    topic: string;
    difficulty: string;
}

export interface QAItem {
    question: string;
    answer: string;
}

async function generateQuestions({ topic, difficulty }: PostQuestionParams): Promise<QAItem[]> {
    const response = await fetch('/api/ai/questions/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, difficulty }),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}

export function useGenerateQuestions(): UseMutationResult<QAItem[], Error, PostQuestionParams> {
    return useMutation(generateQuestions);
}