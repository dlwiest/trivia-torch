import { useMutation, UseMutationResult } from 'react-query';

interface PostQuestionParams {
    topic: string;
    difficulty: string;
}

interface QuestionResponse {
    questions: any[]; // TODO - Define a question type in a shared location
}

async function generateQuestions({ topic, difficulty }: PostQuestionParams): Promise<QuestionResponse> {
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

export function useGenerateQuestions(): UseMutationResult<QuestionResponse, Error, PostQuestionParams> {
    return useMutation(generateQuestions);
}