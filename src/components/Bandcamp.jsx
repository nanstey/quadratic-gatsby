import React from "react"
import PropTypes from "prop-types";
import BandcampPlayer from 'react-bandcamp';

import './Bandcamp.scss';

function Bandcamp({ id }) {
  return (
    <div className="bandcamp-player">
      <div>
        <div style={{ width: 'auto', height: '100%' }} >
          <BandcampPlayer
            album={id}
            tracklist={true}
            width='100%'
            height='100%'
          />
        </div>
      </div>
    </div>
  )
}

Bandcamp.propTypes = {
  id: PropTypes.string,
};

Bandcamp.defaultProps = {
  id: null,
};

export default Bandcamp
