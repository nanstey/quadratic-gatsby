import React from "react";
import PropTypes from "prop-types";

import CircleFAButton from "components/CircleFAButton";
import Image from "components/Image";
import "./ServiceItem.scss";

const ServiceItem = ({ iconName, imageFileName, header, content, link }) => {
  let iconPart;
  if (iconName) {
    iconPart = <CircleFAButton iconName={iconName} />;
  }

  let imagePart;
  if (imageFileName) {
    imagePart = <Image className="service-item-image" fileName={imageFileName} href={link} />;
  }

  return (
    <>
      <a href={link}>{iconPart}</a>
      <a href={link}>{imagePart}</a>
      <h4 className="service-item-heading">{header}</h4>
      <p className="text-muted">{content}</p>
      <a href={link}>Learn More</a>
    </>
  );
};

ServiceItem.propTypes = {
  iconName: PropTypes.string,
  imageFileName: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
};

ServiceItem.defaultProps = {
  iconName: null,
  imageFileName: null,
  header: "",
  content: "",
  link: "",
};

export default ServiceItem;
