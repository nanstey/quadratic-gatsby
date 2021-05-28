import React from "react";
import PropTypes from "prop-types";

import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import { Row, Col, Button } from "react-bootstrap";

import Icon from "../Icon";
import SectionHeader from "../SectionHeader";
import PageSection from "../PageSection/PageSection";
import Image from "../Image";

import "./ProgramPage.scss";

const ProgramImage = ({ float, imageFileName, scrollToSection }) => {
  return (
    <Col lg={6} className={float === "right" ? "order-lg-12" : ""}>
      <div className={`program-image ${float}`}>
        <a role="button" onClick={scrollToSection} tabIndex={0}>
          <Image fileName={imageFileName} alt="" onClick={scrollToSection} />
        </a>
      </div>
    </Col>
  );
};

ProgramImage.propTypes = {
  float: PropTypes.string,
  imageFileName: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

ProgramImage.defaultProps = {
  float: "left",
};

const ProgramDescription = ({ header, contents, iconName, jumpToAnchorText, scrollToSection }) => {
  const IconComponent = iconName ? <Icon iconName={iconName} /> : null;
  return (
    <Col lg={6} className="center-align">
      <div className="program-description">
        <h1>{header}</h1>
        {contents.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {jumpToAnchorText && (
          <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
            {IconComponent} {jumpToAnchorText} {IconComponent}
          </Button>
        )}
      </div>
    </Col>
  );
};

ProgramDescription.propTypes = {
  header: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
  iconName: PropTypes.string.isRequired,
  jumpToAnchorText: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

const ProgramPage = ({ className, pageContent }) => {
  const { anchor, header: rootHeader, subheader: rootSubHeader, contents, programs } = pageContent;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo("Book");

  return programs.length ? (
    <PageSection className={className} id={anchor}>
      <Row className="mb-4 justify-content-center">
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        <Col md={8}>
          <div className="program-page-paragraph-contents">
            {contents.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Col>
      </Row>
      {programs.map((program, index) => (
        <Row className={`text-center program ${program.texture}`} key={program.header}>
          <ProgramImage
            float={index % 2 ? "left" : "right"}
            imageFileName={program.imageFileName}
            scrollToSection={scrollToSection}
          />
          <ProgramDescription
            header={program.header}
            contents={program.contents}
            iconName={program.iconName}
            jumpToAnchorText={program.jumpToAnchorText}
            scrollToSection={scrollToSection}
          />
        </Row>
      ))}
    </PageSection>
  ) : null;
};

ProgramPage.propTypes = {
  className: PropTypes.string,
  pageContent: PropTypes.shape({
    anchor: PropTypes.string,
    header: PropTypes.string,
    subheader: PropTypes.string,
    contents: PropTypes.arrayOf(PropTypes.string),
    programs: PropTypes.arrayOf(
      PropTypes.shape({
        header: PropTypes.string,
        contents: PropTypes.arrayOf(PropTypes.string),
        imageFileName: PropTypes.string,
        jumpToAnchor: PropTypes.string,
        jumpToAnchorText: PropTypes.string,
        iconName: PropTypes.string,
        texture: PropTypes.string,
      }),
    ),
  }).isRequired,
};

ProgramPage.defaultProps = {
  className: null,
};

export default ProgramPage;
