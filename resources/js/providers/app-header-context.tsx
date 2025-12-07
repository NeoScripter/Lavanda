import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

export type HeaderVariant = 'primary' | 'secondary' | 'ghost';

interface HeaderContextValue {
    variant?: HeaderVariant;
}

const AppHeaderContext = createContext<HeaderContextValue>({});

export function useHeaderVariant() {
    return useContext(AppHeaderContext);
}

export default AppHeaderContext;
