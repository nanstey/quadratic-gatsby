import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Page from "components/Page";
import HeroCarousel from "components/HeroCarousel";
import Education from "views/Sections/Education";
import Book from "views/Sections/Book";
import Contact from "views/Sections/Contact";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  const { markdownRemark = {} } = useStaticQuery(
    graphql`
      query EducationPageQuery {
        markdownRemark(fileAbsolutePath: { regex: "/pages/education/i" }) {
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
        <Education className="bg-light" />
        <Book category="education" />
        <Contact className="bg-light" />
      </Page>
    </>
  );
};

export default IndexPage;
