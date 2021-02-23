import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Page from "components/Page";
import HeroCarousel from "components/HeroCarousel";
import Team from "views/Sections/Team";
import About from "views/Sections/About";
import Contact from "views/Sections/Contact";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  const { markdownRemark = {} } = useStaticQuery(
    graphql`
      query AboutPageQuery {
        markdownRemark(fileAbsolutePath: { regex: "/pages/about/i" }) {
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
        <Team className="bg-light" />
        <About />
        <Contact className="bg-light" />
      </Page>
    </>
  );
};

export default IndexPage;
