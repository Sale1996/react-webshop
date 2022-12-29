import { createContext } from "react";
import { CounterContextProps } from './CounterProvider'

export const CounterContext = createContext<CounterContextProps>({} as CounterContextProps );