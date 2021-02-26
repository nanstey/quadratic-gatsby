import React from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";
import { Row, Col, Button } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Image from "components/Image";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";

import "./Education.scss";

const ProgramImage = ({ className, imageFileName, scrollToSection }) => {
  return (
    <Col lg={6} className={className}>
      <div className="education-image">
        <a role="button" onClick={scrollToSection} tabIndex={0}>
          <Image fileName={imageFileName} alt="" onClick={scrollToSection} />
        </a>
      </div>
    </Col>
  );
};

ProgramImage.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

ProgramImage.defaultProps = {
  className: "",
};

const ProgramDescription = ({ header, contents, jumpToAnchorText, scrollToSection }) => {
  return (
    <Col lg={6}>
      <div className="education-description">
        <h1>{header}</h1>
        {contents.map((p) => (
          <p key={p}>{p}</p>
        ))}
        {jumpToAnchorText && (
          <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
            {jumpToAnchorText}
          </Button>
        )}
      </div>
    </Col>
  );
};

ProgramDescription.propTypes = {
  header: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
  jumpToAnchorText: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

const Education = ({ className }) => {
  const { markdownRemark = {} } = useStaticQuery(graphql`
    query EducationQuery {
      markdownRemark(fileAbsolutePath: { regex: "/sections/Education/i" }) {
        frontmatter {
          anchor
          header
          subheader
          contents
          programs {
            header
            contents
            imageFileName
            jumpToAnchor
            jumpToAnchorText
          }
        }
      }
    }
  `);

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, contents, programs } = frontmatter;
  console.log(frontmatter);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo("Book");

  return programs.length ? (
    <PageSection className={className} id={anchor}>
      <Row className="mb-5">
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        <div className="education-page-paragraph-contents">
          {contents.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Row>
      {programs.map((program, index) => (
        <Row className="text-center education" key={program.header}>
          <ProgramImage
            className={index % 2 ? "order-lg-12" : ""}
            imageFileName={program.imageFileName}
            scrollToSection={scrollToSection}
          />
          <ProgramDescription
            header={program.header}
            contents={program.contents}
            jumpToAnchorText={program.jumpToAnchorText}
            scrollToSection={scrollToSection}
          />
        </Row>
      ))}
    </PageSection>
  ) : null;
};

Education.propTypes = {
  className: PropTypes.string,
};

Education.defaultProps = {
  className: null,
};

export default Education;
