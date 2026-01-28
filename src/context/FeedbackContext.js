import { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const leaveFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total === 0 ? 0 : Math.round((feedback.good / total) * 100);

  return <FeedbackContext.Provider value={{ ...feedback, total, positivePercentage, leaveFeedback }}>{children}</FeedbackContext.Provider>;
};

export const useFeedback = () => useContext(FeedbackContext);
