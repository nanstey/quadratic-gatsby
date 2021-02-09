import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";

const Footer = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(fields: { fileName: { regex: "/footer/i" } }) {
        frontmatter {
          copyright
          privacyHref
          privacyText
          social {
            facebook
            instagram
            youtube
          }
        }
      }
    }
  `);

  const frontmatter = markdownRemark.frontmatter;
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    social: { facebook, instagram, youtube },
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
            {youtube ? <SocialIcons.Youtube userName={youtube} /> : null}
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

export default Footer;
