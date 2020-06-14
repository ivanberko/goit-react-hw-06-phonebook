import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
// Components
import ContactForm from "../redux/containers/AddCotact";
import Filter from "../redux/containers/filterContacts";
import ContactList from "../redux/containers/listContacts";

// Styles
import { container, title } from "./App.module.css";
import showTitleTransition from "./transition/showTitle.module.css";

export default class App extends Component {
  state = {
    showTitle: false,
  };

  componentDidMount() {
    this.setState({ showTitle: true });
  }
  render() {
    const { showTitle } = this.state;
    return (
      <section className={container}>
        <CSSTransition
          in={showTitle}
          timeout={500}
          unmountOnExit
          classNames={showTitleTransition}
        >
          <h1 className={title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <Filter />
        <ContactList />
      </section>
    );
  }
}
