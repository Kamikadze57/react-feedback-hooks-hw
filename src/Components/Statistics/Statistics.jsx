import { useFeedback } from "../../context/FeedbackContext";
import Notification from "../Notification/Notification";

const Statistics = () => {
  const { good, neutral, bad, total, positivePercentage } = useFeedback();

  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }

  return (
    <div className="statistics__list">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <hr />
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
