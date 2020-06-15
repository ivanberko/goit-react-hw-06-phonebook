import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import Notification from "../Notification/Notification";

import { formAddContact, buttonAdd, inputForm } from "./ContactForm.module.css";
import notifyTransition from "../Notification/notify.module.css";

const ContactForm = ({ contacts, isNotify, addContact, toggleNotify }) => {
  let inputName;
  let inputNumber;
  const isExistContact = (contacts) => {
    return contacts.find(
      (item) => item.name.toLowerCase() === inputName.value.toLowerCase()
    );
  };

  return (
    <form
      className={formAddContact}
      onSubmit={(e) => {
        e.preventDefault();
        if (
          !isExistContact(contacts) &&
          inputName.value &&
          Number(inputNumber.value)
        ) {
          addContact(inputName.value, inputNumber.value);
          inputName.value = "";
          inputNumber.value = "";
          return;
        }
        toggleNotify(true);
        setTimeout(() => {
          toggleNotify(false);
        }, 1500);
      }}
    >
      <CSSTransition
        in={isNotify}
        timeout={250}
        unmountOnExit
        classNames={notifyTransition}
      >
        <Notification />
      </CSSTransition>

      <label>
        Name
        <input
          ref={(node) => (inputName = node)}
          type="text"
          name="name"
          className={inputForm}
        />
      </label>
      <label>
        Number
        <input
          ref={(node) => (inputNumber = node)}
          type="text"
          name="number"
          className={inputForm}
        />
      </label>
      <button type="submit" className={buttonAdd}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  isNotify: PropTypes.bool.isRequired,
  addContact: PropTypes.func.isRequired,
  toggleNotify: PropTypes.func.isRequired,
};
export default ContactForm;
