import React from "react";

import Page from "components/Page";
import Top from "views/Top";
import Contact from "views/Sections/Contact";
import Location from "views/Sections/Location";
import "utils/fixFontAwesome";
import "../style/main.scss";

const IndexPage = () => {
  return (
    <>
      <Page>
        <Top />
        <Location />
        <Contact className="bg-light" />
      </Page>
    </>
  );
};

export default IndexPage;
