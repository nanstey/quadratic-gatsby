import React from "react";
import PropTypes from "prop-types";

import { Nav } from "react-bootstrap";

import "./NavItem.scss";

const NavItem = ({ to, onClick, children }) => {
  return (
    <Nav.Item>
      <Nav.Link className="nav-link cursor-pointer" href={to} onClick={onClick}>
        {children || to}
      </Nav.Link>
    </Nav.Item>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

NavItem.defaultProps = {
  to: "",
  onClick: null,
  children: null,
};

export default NavItem;
