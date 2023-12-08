import { AiOutlineUserDelete } from 'react-icons/ai';
import { Button, Item, List, Wrap } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { ContactFilter } from 'components/ContactsFilter/ContactsFilter';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  return (
    <Wrap>
      <ContactFilter />
      <List>
        {contacts.map(item => {
          return (
            <Item key={item.id}>
              {item.name}: <span>{item.number}</span>
              <Button>
                <AiOutlineUserDelete />
              </Button>
            </Item>
          );
        })}
      </List>
    </Wrap>
  );
};

// onClick={() => dispatch(removeContact(item.id))}
