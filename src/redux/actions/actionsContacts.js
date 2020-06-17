import { v4 as uuidv4 } from "uuid";
import { Type } from "../../initial/initialContacts";

export const addContact = (name, number) => ({
  type: Type.ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = (id) => ({
  type: Type.DELETE_CONTACT,
  id,
});

export const notify = (isNotify) => ({
  type: Type.NOTIFICATION,
  isNotify,
});

export const filterContacts = (value) => ({
  type: Type.FILTER_CONTACT,
  value,
});

export const contactsLS = (contacts) => ({
  type: Type.CONTACTS_FROM_LS,
  contacts,
});
