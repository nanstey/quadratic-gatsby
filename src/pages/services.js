import React from "react";

import Page from "components/Page";
import Top from "views/Top";
import Portfolio from "views/Sections/Portfolio";
import Book from "views/Sections/Book";
import Contact from "views/Sections/Contact";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  return (
    <>
      <Page>
        <Top />
        <Portfolio className="bg-light" />
        <Book category="services" />
        <Contact className="bg-light" />
      </Page>
    </>
  );
};

export default IndexPage;
