import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Email = ({ address }) => <CircleIcon href={`mailto:${address}`} iconName="EnvelopIcon" />;

Email.propTypes = {
  address: PropTypes.string.isRequired,
};

export default Email;
