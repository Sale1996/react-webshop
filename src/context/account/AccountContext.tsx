import { createContext } from 'react';
import { AccountContextProps } from './AccountProvider';

export const AccountContext = createContext<AccountContextProps>({} as AccountContextProps);