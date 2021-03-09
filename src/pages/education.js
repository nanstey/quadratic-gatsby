import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Page from "components/Page";
import ProgramPage from "components/ProgramPage";
import HeroCarousel from "components/HeroCarousel";
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
            jumpToDate
            pageContent {
              anchor
              header
              subheader
              contents
              programs {
                header
                contents
                imageFileName
                jumpToAnchor
                jumpToAnchorText
                iconName
                texture
              }
            }
          }
        }
      }
    `,
  );

  const slides = markdownRemark.frontmatter?.slides || [];
  const date = markdownRemark.frontmatter?.jumpToDate;
  const pageContent = markdownRemark.frontmatter.pageContent;

  return (
    <>
      <Page>
        <HeroCarousel slides={slides} />
        <Education className="bg-light" />
        <Book category="education" date={date} />
        <ProgramPage className="bg-light" pageContent={pageContent} />
        <Contact />
      </Page>
    </>
  );
};

export default IndexPage;
