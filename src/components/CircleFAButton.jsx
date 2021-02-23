import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";

import "./CircleFAButton.scss";

const CircleFAButton = ({ iconName, ...restProps }) => {
  return (
    <div className="circle-fa-button-container">
      <div className="circle-fa-button">
        <Icon className="circle-fa-button-icon" iconName={iconName} inverse {...restProps} />
      </div>
    </div>
  );
};

CircleFAButton.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default CircleFAButton;
