import { Link} from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { selectError } from '../../redux/auth/selectors';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

   function resetForm() {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmedPassword: '',
    });
  }

    const notify = (message = "Password didn't match") => toast.error(message);

 const handleSubmit = async e => {
    const { name, password, email, confirmedPassword } = formData;
    e.preventDefault();

    if (confirmedPassword === password) {
      try {
        dispatch(register({ name: name, email: email, password: password }));
        resetForm();
        if (error) {
          notify(error);
        }
      } catch (error) {}
    } else {
      notify();
    }
  };

  return (
    <div className={css.container}>
      <div className={css.form}>
            <Toaster />
        <header>Please, enter your details</header>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className={css.text}
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            name="email"
            className={css.text}
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="password"
            name="password"
            className={css.password}
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            pattern=".{8,}"
            required
          />
           <input
                type="password"
                name="confirmedPassword"
                className={css.password}
                placeholder="Confirm a password"
                onChange={handleChange}
                value={formData.confirmedPassword}
                required
              />
          <button type="submit" className={css.button}>
            Signup
          </button>
        </form>
        <div className={css.signup}>
          <span className={css.signup}>
            Already have an account?
            <Link to="/login"> Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;