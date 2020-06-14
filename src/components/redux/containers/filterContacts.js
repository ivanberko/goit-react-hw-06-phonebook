import { connect } from "react-redux";
import { filterContacts } from "../actions/actionsContacts";
import Filter from "../../Filter/Filter";

const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  handleFindName: (value) => dispatch(filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
