import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './Contacts/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
