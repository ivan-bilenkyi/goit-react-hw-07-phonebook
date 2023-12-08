const { createSelector } = require('@reduxjs/toolkit');

export const contactsCelector = state => state.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const contacts = state => state.contacts.items;
export const filter = state => state.filter.status;

export const selectVisibleContacts = createSelector(
  [contacts, filter],
  (contacts, filter) => {
    return contacts?.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
