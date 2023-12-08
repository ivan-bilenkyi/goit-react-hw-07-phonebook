import { useDispatch } from 'react-redux';
import { ContactList } from './Contacts/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <PhonebookForm />
      <div>
        <h2>Contacts</h2>
        <ContactList />
      </div>
      <GlobalStyle />
    </Layout>
  );
};
