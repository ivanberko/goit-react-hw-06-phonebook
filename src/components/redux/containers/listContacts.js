import { connect } from "react-redux";
import { deleteContact } from "../actions/actionsContacts";
import ContactList from "../../ContactList/ContactList";

const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
