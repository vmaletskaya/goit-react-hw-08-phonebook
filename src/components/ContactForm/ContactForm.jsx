import { useState } from 'react';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';

export default function ContactForm({onClick}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handlerOnSubmit = e => {
    e.preventDefault();
    if (contacts.find(o => o.name.toLowerCase() === name.toLowerCase())) {
      return alert(`<< ${name} >> is already in contacts`);
    } else {
      dispatch(addContact({ name,number }));
      reset();
      onClick()
    }
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

   return (
    <div className={css.container}>
      <header>Create a new contact</header>
      <button className={css.closeBtn} onClick={onClick} />
      <form className={css.form} onSubmit={handlerOnSubmit} autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z\s]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="^[0-9]+$"
            title="Phone number must be digits and can not contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>
        <button type="submit" className={css.addContact}>
          Add Contact
        </button>
      </form>
    </div>
  );
}