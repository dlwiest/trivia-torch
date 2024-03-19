import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface KeyStoreState {
    apiKey: string;
    setApiKey: (apiKey: string) => void;
}

export const useKeyStore = create<KeyStoreState>()(
    persist(
        (set) => ({
            apiKey: '',
            setApiKey: (apiKey: string) => set({ apiKey }),
        }),
        {
            name: 'openai-api-key',
            storage: createJSONStorage(() => localStorage),
        },
    )
);
