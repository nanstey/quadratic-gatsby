import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Button } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import Image from "components/Image";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";

import "./Event.scss";

const Events = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, events } = frontmatter;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo("Book");

  const filteredEvents = events.filter((event) => {
    return new Date(event.expiryDate) > new Date();
  });

  return filteredEvents.length ? (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      {filteredEvents.map((event) => (
        <Row className="text-center event" key={event.header}>
          <Col lg={6}>
            <div className="event-image">
              <a role="button" onClick={scrollToSection} tabIndex={0}>
                <Image fileName={event.imageFileName} alt="" onClick={scrollToSection} />
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="event-description">
              <h1>{event.header}</h1>
              <h3>{event.date}</h3>
              {event.contents.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {event.jumpToAnchorText && (
                <Button
                  size="xl"
                  variant="primary"
                  className="text-uppercase"
                  onClick={scrollToSection}
                >
                  {event.jumpToAnchorText}
                </Button>
              )}
            </div>
          </Col>
        </Row>
      ))}
    </PageSection>
  ) : null;
};

Events.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Events.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Events;
