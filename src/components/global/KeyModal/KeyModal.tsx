import { Button, Input, Modal } from '@dlwiest/taila';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import FormGroup from '../atomic/FormGroup/FormGroup';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useEffect } from 'react';
import { KeyModalContextType } from '@/app/context/KeyModalProvider';

const header = (
    <span className="text-indigo-500 dark:text-indigo-400 font-semibold text-lg">API Key</span>
);

const footer = (onClose: () => void, onSubmit: () => void) => (
    <div className="flex justify-end gap-1">
        <Button variant="outline" color="zinc" onPress={onClose}>Cancel</Button>
        <Button color="indigo" type="submit" onPress={onSubmit}>Save</Button>
    </div>
);

interface KeyFormInputs {
    key: string;
}

const KeyModal = ({ showModal, toggleModal }: KeyModalContextType) => {
    const { control, handleSubmit, getValues, setValue, formState: { errors } } = useForm<KeyFormInputs>({
        defaultValues: {
            key: '',
        }
    });

    const [apiKey, setApiKey] = useLocalStorage('openai-api-key', '');

    useEffect(() => {
        //setApiKey('');
        if (apiKey) {
            setValue('key', apiKey);
        }
    }, [apiKey, setValue]);

    const onSubmit: SubmitHandler<KeyFormInputs> = data => {
        setApiKey(data.key);
        toggleModal();
    };

    return (
        <Modal
            isOpen={showModal}
            onOpenChange={toggleModal}
            header={header}
            footer={footer(toggleModal, handleSubmit(onSubmit))}
        >
            <div>
                <p className="text-sm mb-4">TriviaTorch requires an OpenAI API key to generate trivia questions. Generate a key on the <a href="https://platform.openai.com/api-keys" target="_blank" rel="noreferrer" className="text-indigo-500 dark:text-indigo-400">OpenAI website</a> and paste it below.</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup fieldId="key">
                        <Controller
                            control={control}
                            name="key"
                            rules={{ required: false }}
                            render={({ field: { onChange } }) => (
                                <Input
                                    id="topic"
                                    placeholder="OpenAI API Key"
                                    focusColor="indigo"
                                    onChange={onChange}
                                    hasError={!!errors.key}
                                    defaultValue={getValues('key')}
                                    className="bg-zinc-50 dark:bg-zinc-900"
                                />
                            )}
                        />
                    </FormGroup>
                </form>
            </div>
        </Modal>
    );
};

export default KeyModal;
