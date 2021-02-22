import React from "react";

import HeroCarousel from "components/HeroCarousel";
import Page from "components/Page";
import Team from "views/Sections/Team";
import About from "views/Sections/About";
import Contact from "views/Sections/Contact";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  return (
    <>
      <Page>
        <HeroCarousel />
        <Team className="bg-light" />
        <About />
        <Contact className="bg-light" />
      </Page>
    </>
  );
};

export default IndexPage;
