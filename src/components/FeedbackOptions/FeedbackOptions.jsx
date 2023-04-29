import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttonsList}>
      {options.map(option => (
        <li key={option} className={css.buttonEl}>
          <button
            type="button"
            className={css.feedbackButton}
            onClick={() => onLeaveFeedback(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
