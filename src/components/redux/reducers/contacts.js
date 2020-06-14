import { combineReducers } from "redux";
import { Type } from "../actions/actionsContacts";
import { v4 as uuidv4 } from "uuid";

const initialContacts = [
  { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
  { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
  { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
  { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
];

const contacts = (state = initialContacts, { type, payload, id }) => {
  const { ADD_CONTACT, DELETE_CONTACT } = Type;
  switch (type) {
    case ADD_CONTACT:
      return [
        {
          id,
          name: payload.name,
          number: payload.number,
        },
        ...state,
      ];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== id);

    default:
      return state;
  }
};

const filter = (state = "", { type, value }) => {
  const { FILTER_CONTACT } = Type;
  switch (type) {
    case FILTER_CONTACT:
      return value;

    default:
      return state;
  }
};

const notify = (state = false, { type, isNotify }) => {
  const { NOTIFICATION } = Type;
  switch (type) {
    case NOTIFICATION:
      return isNotify;

    default:
      return state;
  }
};

export default combineReducers({ contacts, filter, notify });
