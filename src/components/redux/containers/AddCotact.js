import { connect } from "react-redux";
import ContactForm from "../../ContactForm/ContactForm";
import { addContact, notify } from "../actions/actionsContacts";

const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
  isNotify: state.phonebook.notify,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (name, number) => dispatch(addContact(name, number)),
  toggleNotify: (bool) => dispatch(notify(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
