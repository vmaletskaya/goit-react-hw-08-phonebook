import { Link, useNavigate } from 'react-router-dom';
import css from './LoginForm.module.css';
import { useState } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/', { replace: true });
  };

  return (
    <div className={css.container}>
      <div className={css.form}>
        <header>Login</header>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={formData.password}
          />
          <button type="sumbit" className={css.button}>
            Login
          </button>
        </form>
        <div className={css.signup}>
          <span className={css.signup}>
            Don't have an account?
            <Link to="/register"> Signup</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;