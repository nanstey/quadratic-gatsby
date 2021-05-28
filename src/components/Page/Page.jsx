import React from "react";
import PropTypes from "prop-types";

import SEO from "components/SEO";
import Navbar from "views/Navbar";
import Footer from "views/Footer";

const Page = ({ children }) => {
  return (
    <>
      <SEO />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Page.propTypes = {
  children: PropTypes.any,
};

Page.defaultProps = {
  children: null,
};

export default Page;
