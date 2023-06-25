import { useEffect } from 'react';
import css from './Modal.module.css';
const { createPortal } = require('react-dom');

const Modal = ({ children, onClose }) => {
  const modalRoot = document.querySelector('#modalRoot');

    useEffect(() => {
      window.addEventListener('keydown', closeOnEsc);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', closeOnEsc);
        document.body.style.overflow = 'unset';
      };
    });

    const closeOnEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    const onClickClose = e => {
      if (e.currentTarget === e.target) {
        onClose();
      }
    };



  return createPortal(
    <div className={css.overlay} onClick={onClickClose}>
      <div className={css.content}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;