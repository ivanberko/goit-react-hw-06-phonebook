import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import App from "./components/redux/containers/getContactsFromLS";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
