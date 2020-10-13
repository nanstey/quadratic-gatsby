import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    social: { facebook, instagram },
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={4} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={4} className="my-3 my-lg-0">
            {facebook ? <SocialIcons.Facebook userName={facebook} /> : null}
            {instagram ? <SocialIcons.Instagram userName={instagram} /> : null}
          </Col>
          <Col lg={4} className="text-lg-right">
            <a target="_blank" rel="noreferrer" className="mr-3" href={privacyHref}>
              {privacyText}
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
