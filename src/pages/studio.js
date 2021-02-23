import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Page from "components/Page";
import HeroCarousel from "components/HeroCarousel";
import Book from "views/Sections/Book";
import Contact from "views/Sections/Contact";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  const { markdownRemark = {} } = useStaticQuery(
    graphql`
      query StudioPageQuery {
        markdownRemark(fileAbsolutePath: { regex: "/pages/studio/i" }) {
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
        <Book category="studio" />
        <Contact className="bg-light" />
      </Page>
    </>
  );
};

export default IndexPage;
