/* eslint-disable react/function-component-definition */
import React from "react";

// prop-types
import PropTypes from "prop-types";

// codememe2share components
import { Loading, Container, Spinner } from "codememe2share";

const Loader = (props) => {
  const { visible, id } = props;
  return (
    <Loading
      id={id}
      style={{
        transition: "all 600ms ease",
        opacity: visible ? 1 : 0,
        zIndex: visible ? 99 : -1,
        background: "#222333",
        position: "absolute",
        marginLeft: "-48px",
        marginTop: "-76px",
      }}
    >
      <Container style={{ width: 200, background: "none", backdropFilter: "none" }}>
        <Spinner size={80} />
      </Container>
    </Loading>
  );
};

Loader.defaultProps = {
  id: "",
};

Loader.propTypes = {
  id: PropTypes.string,
  visible: PropTypes.bool.isRequired,
};

export default Loader;