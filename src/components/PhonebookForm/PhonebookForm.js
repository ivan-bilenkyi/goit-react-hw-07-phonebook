import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUserAdd } from 'react-icons/ai';

import {
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  Button,
} from './PhonebookForm.styled';
import { addContact } from 'redux/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
});

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const checkNewContact = newContact => {
    const duplicate = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );
    if (duplicate) {
      return alert(`${newContact.name} is already in contacts`);
    }
    dispatch(addContact(newContact));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          checkNewContact(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup>
            Phone
            <Field name="phone" />
            <ErrorMessage name="phone" component="span" />
          </FormGroup>

          <Button type="submit">
            <AiOutlineUserAdd />
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
