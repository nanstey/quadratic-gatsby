import React from "react";
import PropTypes from "prop-types";

import GoogleMapReact from "google-map-react";
import Icon from "../Icon";

import "./Map.scss";

const LocationPin = () => (
  <div className="pin">
    <Icon iconName="MapMarkerIcon" className="pin-icon" />
  </div>
);

const Map = ({ location, zoomLevel }) => {
  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_MAPS_API }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoomLevel: PropTypes.number,
};

Map.defaultProps = {
  location: null,
  zoomLevel: 18,
};

export default Map;
