import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Youtube = ({ userName }) => (
  <CircleIcon href={`https://youtube.com/${userName}`} iconName="YoutubeIcon" />
);

Youtube.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Youtube;
