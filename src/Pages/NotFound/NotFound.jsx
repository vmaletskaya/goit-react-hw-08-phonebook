import { useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/', { replace: true });
  };
  return (
    <div className={css.page}>
      <div className={css.container}>
        <h2>Oops, page not found</h2>
        <div>
          <p>To navigate to the home page, simply click the button</p>
          <button type="button" onClick={onClick} className={css.goBackBtn}>
            Return to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;