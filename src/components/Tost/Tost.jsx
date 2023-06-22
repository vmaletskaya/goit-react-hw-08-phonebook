import { useEffect, useState } from 'react';
import css from './Tost.module.css';

const Tost = ({ message }) => {
  const [showTost, setShowTost] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowTost(false);
    }, 3000);
  }, []);

  return (
    showTost && (
      <div className={css.tost} onClick={() => setShowTost(false)}>
        <h3 className={css.title}>Info</h3>
        <p className={css.text}>{message}</p>
      </div>
    )
  );
};

export default Tost;