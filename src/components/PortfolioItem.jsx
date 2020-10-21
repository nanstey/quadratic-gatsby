import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";

import ModalOverlay from "components/ModalOverlay";
import Image from "components/Image";
import Icon from "components/Icon";
import Video from "components/Video";
import Bandcamp from "components/Bandcamp";

import "./PortfolioItem.scss";

const PortfolioItem = ({
  type,
  youtubeLink,
  bandcampId,
  imageFileName,
  imageAlt,
  header,
  subheader,
}) => {
  const [showDetail, setShowDetail] = React.useState(false);
  const handleShowDetail = React.useCallback(() => {
    setShowDetail(true);
  }, []);
  const handleHideDetail = React.useCallback(() => {
    setShowDetail(false);
  }, []);

  return (
    <>
      <Col lg={4} md={6} className="portfolio-item">
        <a
          role="button"
          tabIndex={-1}
          className="portfolio-link"
          data-toggle="modal"
          onClick={handleShowDetail}
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
      <ModalOverlay
        show={showDetail}
        onHide={handleHideDetail}
      >
        {type === 'youtube' && <Video url={youtubeLink} />}
        {type === 'bandcamp' && <Bandcamp id={bandcampId} />}
      </ModalOverlay>
    </>
  );
};

PortfolioItem.propTypes = {
  type: PropTypes.string.isRequired,
  bandcampId: PropTypes.string,
  youtubeLink: PropTypes.string,
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
};

PortfolioItem.defaultProps = {
  youtubeLink: "",
  bandcampId: "",
  imageAlt: "",
  subheader: "",
};

export default PortfolioItem;
