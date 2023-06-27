import Button from 'components/Button/Button';



import css from './UserBar.module.css';
import { useDispatch} from 'react-redux';

import { logOut } from '../../redux/auth/operations';

const UserBar = () => {



  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logOut());
  }

  return (
    <div className={css.container}>
      
      <Button onClick={handleLogout}>
       <span className={css.textOnBtn}>Logout</span>
       
      </Button>
    </div>
  );
};
export default UserBar;