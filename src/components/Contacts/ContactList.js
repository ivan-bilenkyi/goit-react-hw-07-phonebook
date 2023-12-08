import { AiOutlineUserDelete } from 'react-icons/ai';
import { Button, Item, List, Wrap } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactFilter } from 'components/ContactsFilter/ContactsFilter';
import { removeContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <ContactFilter />
      <List>
        {contacts.map(item => {
          return (
            <Item key={item.id}>
              {item.name}: <span>{item.phone}</span>
              <Button onClick={() => dispatch(removeContact(item.id))}>
                <AiOutlineUserDelete />
              </Button>
            </Item>
          );
        })}
      </List>
    </Wrap>
  );
};
