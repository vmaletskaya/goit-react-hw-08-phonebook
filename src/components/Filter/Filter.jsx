import Button from 'components/Button/Button';
import css from './Filter.module.css';

import PropTypes from 'prop-types';


const Filter = ({ filterValue, onChange, onClick }) => {

  return (
    <div className={css.container}>
      <input
        type="text"
        className={css.filterField}
        value={filterValue}
        onChange={onChange}
        placeholder={'Find contacts by name'}
      />
      <Button onClick={onClick}>Add contact</Button>
    </div>
  );
};
export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};