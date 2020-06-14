import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import contacts from "./reducers/contacts";

const rootReducer = combineReducers({
  phonebook: contacts,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
