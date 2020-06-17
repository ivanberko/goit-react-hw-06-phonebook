import { combineReducers } from "redux";
import { initialContacts, Type } from "../../initial/initialContacts";

const contacts = (state = initialContacts, { type, payload, id, contacts }) => {
  const { ADD_CONTACT, DELETE_CONTACT, CONTACTS_FROM_LS } = Type;
  switch (type) {
    case ADD_CONTACT:
      return [
        {
          id: payload.id,
          name: payload.name,
          number: payload.number,
        },
        ...state,
      ];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== id);

    case CONTACTS_FROM_LS:
      return [...contacts];

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
