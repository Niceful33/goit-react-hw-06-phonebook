import React from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Layout/Layout.Styled';

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Container>
  );
}
