import "./App.css";
import { useRef } from "react";
import { FeedbackProvider } from "./context/FeedbackContext";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";

const App = () => {
  const buttonsRef = useRef(null);

  return (
    <FeedbackProvider>
      <div className="app">
        <Section title="Please leave a feedback">
          <div ref={buttonsRef}>
            <FeedbackOptions options={["good", "neutral", "bad"]} />
          </div>
        </Section>
        <Section title="Statistics">
          <Statistics />
        </Section>
      </div>
    </FeedbackProvider>
  );
};

export default App;
