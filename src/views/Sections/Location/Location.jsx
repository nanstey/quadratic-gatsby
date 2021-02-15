import React from "react";
import PropTypes from "prop-types";

import Map from "components/Map";
import PageSection from "components/PageSection";

const location = {
  address: "3-740 Discovery Street",
  postal: "Victoria, BC V8T 1H2",
  lat: 48.4322973,
  lng: -123.3629806,
};

const Location = ({ className }) => {
  return (
    <PageSection className={className} id="Location">
      <div className="text-center mb-4">
        <h2 className="mt-0">Location</h2>
        {location.address} <br />
        {location.postal}
      </div>
      <div className="map ">
        <Map location={location} />
      </div>
    </PageSection>
  );
};

Location.propTypes = {
  className: PropTypes.string,
};

Location.defaultProps = {
  className: "",
};

export default Location;
