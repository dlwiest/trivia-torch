import { NextRequest, NextResponse } from 'next/server';

// Define an interface for the request body
interface RequestBody {
    topic: string;
    difficulty: string;
}

export async function POST(req: NextRequest) {
    // Parse the JSON body and cast it to the RequestBody type
    const { topic, difficulty } = await req.json() as RequestBody;

    if (!topic || !difficulty) {
        return new NextResponse(JSON.stringify('Bad Request'), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        // Poll OpenAI
        // Replace this with your actual OpenAI API call and logic
        return new NextResponse(JSON.stringify(['question one', 'question 2']), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify('Error fetching questions from OpenAI'), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}