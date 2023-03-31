import React from 'react';

import { Item, Button } from './ContacList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  // const handleDeleteContact = () => {
  //   dispatch(deleteContact(id));
  // };
  return (
    <ul>
      {contacts.map(({ user, number, id }) => (
        <Item key={id}>
          <span>{user}:</span>
          <span>{number}</span>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};
export default ContactList;
