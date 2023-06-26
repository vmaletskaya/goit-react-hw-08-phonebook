import Button from 'components/Button/Button';

import { useNavigate } from 'react-router-dom';

import css from './UserBar.module.css';

const UserBar = () => {
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/login');
  }
  return (
    <div className={css.container}>
      <Button name={'Logout'} onClick={handleLogout}></Button>
    </div>
  );
};
export default UserBar;
