/* global DROPLET */

import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import useScript from "hooks/useScript";

const Book = ({ className, frontmatter }) => {
  useScript("//quadraticsound.checkfront.com/lib/interface--0.js", () => {
    new DROPLET.Widget({
      host: 'quadraticsound.checkfront.com',
      target: 'CHECKFRONT_WIDGET',
      options: 'tabs',
      provider: 'droplet'
    }).render();
  });

  if (!frontmatter) {
    return null;
  }

  const { anchor, header } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={header} subheader='' />
      </Row>
      <div id="CHECKFRONT_WIDGET">
        <p id="CHECKFRONT_LOADER" style={{ background: "url('//quadraticsound.checkfront.com/images/loader.gif') left center no-repeat", padding: "5px 5px 5px 20px" }}>
          Searching Availability...
          </p>
      </div>
      <noscript><a href="https://quadraticsound.checkfront.com/reserve/" style={{ fontSize: "16" }}>Continue to Secure Booking System &raquo;</a></noscript>
    </PageSection >
  );
};

Book.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Book.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Book;
