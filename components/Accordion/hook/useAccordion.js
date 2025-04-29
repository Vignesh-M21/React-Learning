import { createContext, useContext } from "react";

export const AccordionContext = createContext();

export const useAccordion = () => {
  return useContext(AccordionContext);
};
