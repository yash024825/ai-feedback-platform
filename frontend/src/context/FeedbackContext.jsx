import React, { createContext, useState } from "react";

// ✅ Create the context
export const FeedbackContext = createContext();

// ✅ Provider component
export const FeedbackProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useState([]);

  // Add new feedback
  const addFeedback = (feedback) => {
    setFeedbackList((prev) => [...prev, feedback]); // ✅ safer update
  };

  // Optional: clear all feedback
  const clearFeedback = () => {
    setFeedbackList([]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbackList, addFeedback, clearFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
