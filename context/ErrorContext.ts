import { createContext } from "react";

export const ErrorContext = createContext({
  showError: (text: string) => {},
});
