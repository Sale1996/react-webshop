import { createContext } from 'react';
import { ProductListContextProps } from './ProductListProvider';

export const ProductListContext = createContext<ProductListContextProps>({} as ProductListContextProps); 