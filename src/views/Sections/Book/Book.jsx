/* global DROPLET */

import React from "react";
import PropTypes, { string } from "prop-types";
import { Row } from "react-bootstrap";
import dayjs from "dayjs";

import { useStaticQuery, graphql } from "gatsby";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import useScript from "hooks/useScript";

import "./Book.scss";

const categoryMap = {
  all: "1,2",
  studio: 1,
  services: 2,
  test: 39,
};

const Book = ({ className, category, date: dateString }) => {
  const config = {
    host: "quadraticsound.checkfront.com",
    target: "CHECKFRONT_WIDGET",
    options: "tabs",
    provider: "droplet",
    category_id: categoryMap[category],
  };

  if (dateString) {
    const date = dayjs(dateString);
    if (date.isAfter(dayjs())) {
      config.date = date.format("YYYYMMDD");
    }
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
        <div id="CHECKFRONT_LOADER">
          <div
            id="CHECKFRONT_AVAILABILITY"
            style={{
              background:
                "url('//quadraticsound.checkfront.com/images/loader.gif') left center no-repeat",
            }}
          >
            Searching Availability...
          </div>
        </div>
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
  date: string,
};

Book.defaultProps = {
  className: null,
  category: "all",
  date: null,
};

export default Book;
