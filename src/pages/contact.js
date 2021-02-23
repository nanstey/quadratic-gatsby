import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Page from "components/Page";
import HeroCarousel from "components/HeroCarousel";
import Location from "views/Sections/Location";
import Contact from "views/Sections/Contact";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  const { markdownRemark = {} } = useStaticQuery(
    graphql`
      query ContactPageQuery {
        markdownRemark(fileAbsolutePath: { regex: "/pages/contact/i" }) {
          frontmatter {
            slides {
              header
              subheader
              imageFileName
            }
          }
        }
      }
    `,
  );

  const slides = markdownRemark.frontmatter?.slides || [];

  return (
    <>
      <Page>
        <HeroCarousel slides={slides} />
        <Location />
        <Contact className="bg-light" showBookButton={false} />
      </Page>
    </>
  );
};

export default IndexPage;
