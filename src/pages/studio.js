import React from "react";

import Page from "components/Page";
import Top from "views/Top";
import Book from "views/Sections/Book";
import Contact from "views/Sections/Contact";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  return (
    <>
      <Page>
        <Top />
        <Book category="studio" />
        <Contact className="bg-light" />
      </Page>
    </>
  );
};

export default IndexPage;
