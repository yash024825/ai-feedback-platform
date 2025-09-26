export const analyzeFeedback = (text) => {
  const lower = text.toLowerCase();

  if (lower.includes("good") || lower.includes("great") || lower.includes("excellent")) {
    return "positive";
  } else if (lower.includes("bad") || lower.includes("poor") || lower.includes("terrible")) {
    return "negative";
  } else {
    return "neutral";
  }
};
