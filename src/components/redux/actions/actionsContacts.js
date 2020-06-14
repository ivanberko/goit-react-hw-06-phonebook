import { v4 as uuidv4 } from "uuid";

export const Type = {
  ADD_CONTACT: "ADD_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",
  FILTER_CONTACT: "FILTER_CONTACT",
  NOTIFICATION: "NOTIFICATION",
};

export const addContact = (name, number) => ({
  type: Type.ADD_CONTACT,
  id: uuidv4(),
  payload: {
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
