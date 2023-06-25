import { createPortal } from 'react-dom';
import css from './Loader.module.css';
import logo from '../../assets/loader.gif';
import { useEffect } from 'react';
const root4Loader = document.querySelector('#loader');


const Loader = ({ size = 50}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return createPortal(
    <div className={css.overlay}>
      <img
        src={logo}
        alt="loading..."
        width={size}
        className={css.spiner}
      />
    </div>,
    root4Loader
  );
};

export default Loader;