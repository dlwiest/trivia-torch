'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/components/global/Button/Button';
import FormGroup from '@/components/global/FormGroup/FormGroup';
import Input from '@/components/global/Input/Input';
import Select from '@/components/global/Select/Select';
import { TriviaFormInputs } from '@/app/page';

const difficultyOptions = [
    { name: 'Easy', value: 'easy' },
    { name: 'Medium', value: 'medium' },
    { name: 'Hard', value: 'hard' },
];

interface TriviaFormProps {
    generateQuestions: (data: TriviaFormInputs) => void;
}

const TriviaForm = ({ generateQuestions }: TriviaFormProps) => {
    const { register, handleSubmit } = useForm<TriviaFormInputs>({
        defaultValues: {
            difficulty: 'medium',
        }
    });

    const onSubmit: SubmitHandler<TriviaFormInputs> = data => generateQuestions(data);

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup fieldId="topic" label="Topic">
                <Input id="topic" placeholder="music, history, the Office, etc." required { ...register('topic') } />
            </FormGroup>
            <FormGroup fieldId="difficulty" label="Difficulty">
                <Select id="difficulty" options={difficultyOptions} { ...register('difficulty') } />
            </FormGroup>
            <div className="mt-2 w-full text-right">
                <Button>Submit</Button>
            </div>
        </form>
    );
};

export default TriviaForm;