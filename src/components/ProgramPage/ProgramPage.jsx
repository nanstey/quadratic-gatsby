import React from "react";
import PropTypes from "prop-types";

import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import { Row, Col, Button } from "react-bootstrap";

import Icon from "../Icon";
import SectionHeader from "../SectionHeader";
import PageSection from "../PageSection";
import Image from "../Image";

import "./ProgramPage.scss";

const ProgramImage = ({ float, imageFileName, jumpToAnchor }) => {
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

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
  jumpToAnchor: PropTypes.string.isRequired,
};

ProgramImage.defaultProps = {
  float: "left",
};

const ProgramDescription = ({ header, contents, iconName, jumpToAnchorText, jumpToAnchor }) => {
  const IconComponent = iconName ? <Icon iconName={iconName} /> : null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

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
  jumpToAnchor: PropTypes.string.isRequired,
};

const Program = ({ program: { header, contents, imageFileName, jumpToAnchor, jumpToAnchorText, iconName, texture }, index}) => {
  

  return (
    <Row className={`text-center program ${texture}`} key={header}>
      <ProgramImage
        float={index % 2 ? "left" : "right"}
        imageFileName={imageFileName}
        jumpToAnchor={jumpToAnchor}
      />
      <ProgramDescription
        header={header}
        contents={contents}
        iconName={iconName}
        jumpToAnchorText={jumpToAnchorText}
        jumpToAnchor={jumpToAnchor}
      />
    </Row>)
}

Program.propTypes = {
  program: PropTypes.shape({
      header: PropTypes.string,
      contents: PropTypes.arrayOf(PropTypes.string),
      imageFileName: PropTypes.string,
      jumpToAnchor: PropTypes.string,
      jumpToAnchorText: PropTypes.string,
      iconName: PropTypes.string,
      texture: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired
}

const ProgramPage = ({ className, pageContent }) => {
  const { anchor, header: rootHeader, subheader: rootSubHeader, contents, programs } = pageContent;

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
      {programs.map((program, index) => {
        return <Program program={program} index={index} key={program.header}/>
        }
      )}
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
