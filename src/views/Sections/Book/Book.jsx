/* global DROPLET */

import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

import { useStaticQuery, graphql } from "gatsby";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import useScript from "hooks/useScript";

const categoryMap = {
  all: false,
  studio: 1,
  services: 2,
  education: 37,
};

const Book = ({ className, category }) => {
  const config = {
    host: "quadraticsound.checkfront.com",
    target: "CHECKFRONT_WIDGET",
    options: "tabs",
    provider: "droplet",
  };

  const categoryId = categoryMap[category];
  if (categoryId) {
    config.category_id = categoryId;
  }

  useScript("//quadraticsound.checkfront.com/lib/interface--0.js", () => {
    new DROPLET.Widget(config).render();
  });

  const { markdownRemark = {} } = useStaticQuery(graphql`
    query BookQuery {
      markdownRemark(fields: { fileName: { regex: "/book/i" } }) {
        frontmatter {
          anchor
          header
        }
      }
    }
  `);

  const frontmatter = markdownRemark.frontmatter;

  if (!frontmatter) {
    return null;
  }

  const { anchor, header } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={header} subheader="" />
      </Row>
      <div id="CHECKFRONT_WIDGET">
        <p
          id="CHECKFRONT_LOADER"
          style={{
            background:
              "url('//quadraticsound.checkfront.com/images/loader.gif') left center no-repeat",
            padding: "5px 5px 5px 20px",
          }}
        >
          Searching Availability...
        </p>
      </div>
      <noscript>
        <a href="https://quadraticsound.checkfront.com/reserve/" style={{ fontSize: "16" }}>
          Continue to Secure Booking System &raquo;
        </a>
      </noscript>
    </PageSection>
  );
};

Book.propTypes = {
  className: PropTypes.string,
  category: PropTypes.oneOf(["all", "studio", "services", "education"]),
};

Book.defaultProps = {
  className: null,
  category: "all",
};

export default Book;
