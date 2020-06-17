import { connect } from "react-redux";
import App from "../../components/App/App";
import { contactsLS } from "../actions/actionsContacts";

const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  addContacts: (contacts) => dispatch(contactsLS(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
