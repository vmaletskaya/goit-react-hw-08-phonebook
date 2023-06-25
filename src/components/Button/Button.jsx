import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ name,children, onClick }) => {
  return (
    <button
      type="button"
      className={css.basicButton}
      onClick={onClick}
    >
      {name}
      {children}
    </button>
  );
};
export default Button;

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};