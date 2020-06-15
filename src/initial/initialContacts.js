import { v4 as uuidv4 } from "uuid";

export const initialContacts = [
  { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
  { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
  { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
  { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
];

export const Type = {
  ADD_CONTACT: "ADD_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",
  FILTER_CONTACT: "FILTER_CONTACT",
  CONTACTS_FROM_LS: 'CONTACTS_FROM_LS',
  NOTIFICATION: "NOTIFICATION",
};

