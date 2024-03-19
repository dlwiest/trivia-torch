import KeyModal from '@/components/global/KeyModal/KeyModal';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface KeyModalContextType {
    showModal: boolean;
    toggleModal: () => void; 
}

const KeyModalContext = createContext<KeyModalContextType | undefined>(undefined);

export const useKeyModal = () => {
    const context = useContext(KeyModalContext);
    if (context === undefined) {
        throw new Error('useKeyModal must be used within a KeyModalProvider');
    }
    return context;
};

interface KeyModalProviderProps {
    children: ReactNode;
}

export const KeyModalProvider: React.FC<KeyModalProviderProps> = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = (callback?: () => void) => {
        setShowModal(prevShowModal => !prevShowModal);
    };

    return (
        <KeyModalContext.Provider value={{ showModal, toggleModal }}>
            {children}
            <KeyModal showModal={showModal} toggleModal={toggleModal} />
        </KeyModalContext.Provider>
    );
};