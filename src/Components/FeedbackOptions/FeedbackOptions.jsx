import { useFeedback } from "../../context/FeedbackContext";

const FeedbackOptions = ({ options }) => {
  const { leaveFeedback } = useFeedback();

  return (
    <div className="buttons__box">
      {options.map((option) => (
        <button key={option} className="btn" onClick={() => leaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
