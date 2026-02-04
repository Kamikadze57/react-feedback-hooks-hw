import { createContext, useContext } from "react";
import { useFeedbackState } from "../hooks/useFeedback";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => (
  <FeedbackContext.Provider value={useFeedbackState()}>
    {children}
  </FeedbackContext.Provider>
);

export const useFeedback = () => useContext(FeedbackContext);