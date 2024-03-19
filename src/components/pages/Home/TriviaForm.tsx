'use client';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button } from '@dlwiest/taila';
import FormGroup from '@/components/global/atomic/FormGroup/FormGroup';
import { Input, Select, SelectItem } from '@dlwiest/taila';
import { TriviaFormInputs } from '@/app/Home/page';
import { useKeyModal } from '@/context/KeyModalProvider';
import { useKeyStore } from '@/state/keyStore';

interface TriviaFormProps {
    generateQuestions: (data: TriviaFormInputs, apiKey: string) => void;
}

const TriviaForm = ({ generateQuestions }: TriviaFormProps) => {
    const apiKey = useKeyStore(state => state.apiKey);
    const { toggleModal } = useKeyModal();
    
    const { control, handleSubmit, getValues, formState: { errors } } = useForm<TriviaFormInputs>({
        defaultValues: {
            topic: '',
            difficulty: 'medium',
        }
    });

    const onSubmit: SubmitHandler<TriviaFormInputs> = data => {
        if (!apiKey) {
            toggleModal();
        } else {
            generateQuestions(data, apiKey);
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup fieldId="topic" label="Topic">
                <Controller
                    control={control}
                    name="topic"
                    rules={{ required: true }}
                    render={({ field: { onChange } }) => (
                        <Input
                            id="topic"
                            placeholder="music, history, the Office, etc."
                            focusColor="indigo"
                            onChange={onChange}
                            hasError={!!errors.topic}
                            defaultValue={getValues('topic')}
                            className="bg-zinc-50 dark:bg-zinc-900"
                            autoFocus
                        />
                    )}
                />

            </FormGroup>
            <FormGroup fieldId="difficulty" label="Difficulty" className="w-96">
                <Controller
                    control={control}
                    name="difficulty"
                    render={({ field: { onChange } }) => (
                        <Select aria-label="difficulty" focusColor="indigo" onSelectionChange={onChange} placeholder="Difficulty" defaultSelectedKey={getValues('difficulty')} className="bg-zinc-50 dark:bg-zinc-900">
                            <SelectItem id="easy" textValue="Easy" focusColor="indigo">Easy</SelectItem>
                            <SelectItem id="medium" textValue="Medium" focusColor="indigo">Medium</SelectItem>
                            <SelectItem id="hard" textValue="Hard" focusColor="indigo">Hard</SelectItem>
                        </Select>
                    )}
                />
            </FormGroup>
            <div className="mt-2 w-full text-right">
                <Button type="submit" color="indigo">Submit</Button>
            </div>
        </form>
    );
};

export default TriviaForm;