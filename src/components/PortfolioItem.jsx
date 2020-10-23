import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";

import Image from "components/Image";
import Icon from "components/Icon";


import "./PortfolioItem.scss";

const PortfolioItem = ({
  item: {
    imageFileName,
    imageAlt,
    header,
    subheader,
  },
  setActive
}) => {
  return (
    <>
      <Col lg={4} md={6} className="portfolio-item">
        <a
          role="button"
          tabIndex={-1}
          className="portfolio-link"
          data-toggle="modal"
          onClick={setActive}
        >
          <Image
            className="img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <Icon iconName="PlayIcon" size="2x" />
            </div>
          </div>
        </a>
        <div className="portfolio-caption">
          <h4>{header}</h4>
          {subheader ? <p className="text-muted">{subheader}</p> : null}
        </div>
      </Col>
    </>
  );
};

PortfolioItem.propTypes = {
  item: PropTypes.shape({
    imageFileName: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
  }).isRequired,
  setActive: PropTypes.func.isRequired,
};

export default PortfolioItem;
