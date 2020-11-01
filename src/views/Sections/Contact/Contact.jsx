import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Button } from "react-bootstrap";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, callToAction, telephone, email, jumpToAnchor, jumpToAnchorText } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-muted">{subheader}</p>
          <p className="text-muted mb-5">{callToAction}</p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <div style={{ textAlign: 'center' }}>
          <Button size="xl" variant="primary" className="text-uppercase" onClick={scrollToSection}>
            {jumpToAnchorText}
          </Button>
        </div>
      </Row>
      <Row>
        {telephone ? (
          <Col lg={4} className="m-auto text-center">
            <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
            <a className="d-block" href={`tel:${telephone}`}>
              {telephone}
            </a>
          </Col>
        ) : ''
        }
        <Col lg={4} className="m-auto text-center">
          <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
