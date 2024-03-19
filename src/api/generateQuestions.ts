import { useKeyStore } from '@/state/keyStore';
import { useMutation, UseMutationResult } from 'react-query';

interface PostQuestionParams {
    topic: string;
    difficulty: string;
    apiKey: string;
}

export interface QAItem {
    question: string;
    answer: string;
}

async function generateQuestions({ topic, difficulty, apiKey }: PostQuestionParams): Promise<QAItem[]> {
    const response = await fetch('/api/ai/questions/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, difficulty, apiKey: apiKey }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
}

export function useGenerateQuestions(): UseMutationResult<QAItem[], Error, Omit<PostQuestionParams, 'apiKey'>> {
    const apiKey = useKeyStore(state => state.apiKey);
    return useMutation((params) => generateQuestions({ ...params, apiKey }));
}
