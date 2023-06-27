import Layout from 'components/Layout/Layout';
import ContactForm from 'components/ContactForm/ContactForm';
import Loader from 'components/Loader/Loader';
import Tost from 'components/Tost/Tost';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Modal from 'components/Modal/Modal';
import css from './Home.module.css';
import { Toaster } from 'react-hot-toast';


import { fetchAll } from 'redux/operations';
import { selectContacts, selectError, selectFilter, selectIsLoading } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux'; 
import { setFilter } from 'redux/filterSlice'; 
import { useEffect, useState } from 'react';

export function Home() {
  const [isShownModal, setIsShownModal] = useState(false);
  const dispatch = useDispatch();

 
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value)); 
  };

  const showModal = () => {
    setIsShownModal(prev => !prev);
  };

  const normalizeFilter = filter.toLowerCase();
  const foundContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));

  return (
    <div className={css.container}>
      <Layout >
        <Filter onChange={changeFilter} filterValue={filter} onClick={showModal} />
        <Toaster />
        {isShownModal && (
          <Modal onClose={showModal}>
            <ContactForm onClick={showModal} />
          </Modal>
        )}
        {isLoading && !error && <Loader />}
        {error && <Tost message={error} />}
        <ContactList list={foundContacts.reverse()} />
      </Layout>
    </div>
  );
}

export default Home;