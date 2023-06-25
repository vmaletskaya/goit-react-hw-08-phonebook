import Button from 'components/Button/Button';
import avatar from '../../assets/avatar.png';

import { useNavigate } from 'react-router-dom';

import css from './UserBar.module.css';

const UserBar = ({ name = 'User' }) => {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/login');
  }
  return (
    <div className={css.container}>
      <h3 className={css.userName}>{name}</h3>
      <img src={avatar} alt="avatar" width="100" className={css.icon} />

      <Button name={'Logout'} onClick={handleLogout}></Button>
    </div>
  );
};
export default UserBar;
