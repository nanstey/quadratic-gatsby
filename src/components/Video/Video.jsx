import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

import "./Video.scss";

function Video({ url }) {
  return (
    <div className="video-player">
      <ReactPlayer playing={true} controls={true} width="auto" url={url} />
    </div>
  );
}

Video.propTypes = {
  url: PropTypes.string,
};

Video.defaultProps = {
  url: null,
};

export default Video;
