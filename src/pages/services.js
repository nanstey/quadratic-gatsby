import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Page from "components/Page";
import HeroCarousel from "components/HeroCarousel";
import ProgramPage from "components/ProgramPage";
import Portfolio from "views/Sections/Portfolio";
import Book from "views/Sections/Book";
import Contact from "views/Sections/Contact";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  const { markdownRemark = {} } = useStaticQuery(
    graphql`
      query ServicesPageQuery {
        markdownRemark(fileAbsolutePath: { regex: "/pages/services/i" }) {
          frontmatter {
            slides {
              header
              subheader
              imageFileName
            }
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
  const pageContent = markdownRemark.frontmatter.pageContent;

  return (
    <>
      <Page>
        <HeroCarousel slides={slides} />
        <ProgramPage pageContent={pageContent} />
        <Portfolio className="bg-light" />
        <Book category="test" />
        <Contact className="bg-light" />
      </Page>
    </>
  );
};

export default IndexPage;
