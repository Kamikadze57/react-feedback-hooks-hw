import { useState } from "react";
import "./App.css";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (type) => {
    switch (type) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = ["good", "neutral", "bad"];
  
  return (
    <div className="app">
      <Section title="Please leave a feedback">
        <FeedbackOptions options={options} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
      </Section>
    </div>
  );
};

export default App;
