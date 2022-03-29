import { combineComponents } from "../utils";
import FibonacciProvider from './fibonacci';
import ThemeProvider from './theme';

const providers = [FibonacciProvider, ThemeProvider];

export const AppContextProvider = combineComponents(...providers);
