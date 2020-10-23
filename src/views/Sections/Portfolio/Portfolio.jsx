import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PortfolioItem from "components/PortfolioItem";
import PageSection from "components/PageSection";
import Video from "components/Video";
import Bandcamp from "components/Bandcamp";
import ModalOverlay from "components/ModalOverlay";

import "./Portfolio.scss";

const Portfolio = ({ className, frontmatter }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, portfolios } = frontmatter;
  const activeModalItem = activeIndex !== null ? portfolios[activeIndex] : null;

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {portfolios.map(
          (portfolioItem, index) => (
            <PortfolioItem
              key={portfolioItem.header}
              item={portfolioItem}
              setActive={() => setActiveIndex(index)}
            />
          ),
        )}
        {activeModalItem && (
          <ModalOverlay
            show={activeIndex !== null}
            onHide={() => setActiveIndex(null)}
            closeModal={() => setActiveIndex(null)}
            setLeft={() => setActiveIndex((activeIndex - 1 + portfolios.length) % portfolios.length)}
            setRight={() => setActiveIndex((activeIndex + 1) % portfolios.length)}
          >
            {activeModalItem.type === 'youtube' && <Video url={activeModalItem.youtubeLink} />}
            {activeModalItem.type === 'bandcamp' && <Bandcamp id={activeModalItem.bandcampId} />}
          </ModalOverlay>
        )}
      </Row>
    </PageSection>
  );
};

Portfolio.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Portfolio.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Portfolio;
