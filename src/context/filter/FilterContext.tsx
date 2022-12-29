import { createContext } from 'react';
import { FilterContextProps } from './FilterProvider';

export const FilterContext = createContext<FilterContextProps>({} as FilterContextProps); 