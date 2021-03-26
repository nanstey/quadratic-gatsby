import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Soundcloud = ({ userName }) => (
  <CircleIcon href={`https://soundcloud.com/${userName}`} iconName="SoundcloudIcon" />
);

Soundcloud.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Soundcloud;
