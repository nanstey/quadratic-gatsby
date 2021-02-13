import React from "react";

import Page from "components/Page";
import Top from "views/Top";
import Services from "views/Sections/Services";
import Book from "views/Sections/Book";
import Contact from "views/Sections/Contact";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  return (
    <>
      <Page>
        <Top />
        <Services className="bg-light" />
        <Book />
        <Contact className="bg-light" />
      </Page>
    </>
  );
};

export default IndexPage;
