import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { sectionFilter, inputFilter } from "./Filter.module.css";
import filterTransition from "./transition/filter.module.css";

const Filter = ({ contacts, handleFindName }) => {
  let inputNodeFilter;

  return (
    <CSSTransition
      in={contacts.length >= 2}
      timeout={250}
      unmountOnExit
      classNames={filterTransition}
    >
      <section className={sectionFilter}>
        <label>
          Find contacts by name
          <input
            ref={(node) => (inputNodeFilter = node)}
            type="text"
            name="filter"
            onChange={() => handleFindName(inputNodeFilter.value)}
            className={inputFilter}
          />
        </label>
      </section>
    </CSSTransition>
  );
};
Filter.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleFindName: PropTypes.func.isRequired,
};

export default Filter;
