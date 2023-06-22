import css from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchAll } from 'redux/operations';
import { getContacts, getError } from '../redux/selectors';

import Section from './Section/Section';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { useEffect } from 'react';
import Tost from './Tost/Tost';

export function App() {
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const normalizeFilter = filter.toLowerCase();
  const foundContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <div className={css.app}>
      <Section title={'Phonebook'} type={'h1'}>
        <ContactForm />
      </Section>
      <Section title={'Find contacts by name'} type={'h2'}>
        <Filter onChange={changeFilter} filterValue={filter} />
      </Section>
      <Section>
        {error && <Tost message={error} />}
        <ContactList list={foundContacts.reverse()} />
      </Section>
    </div>
  );
}