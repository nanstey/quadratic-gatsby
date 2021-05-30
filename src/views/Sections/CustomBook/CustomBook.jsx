import React, { useState } from "react";
import PropTypes from "prop-types";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import useItems from "../../../hooks/useItems";

import "./CustomBook.scss";

function chunkArray(array, chunkSize) {
  const results = [];

  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }

  return results;
}

const CustomBook = () => {
  const items = useItems();

  // eslint-disable-next-line no-console
  console.log(items);

  return (
    <PageSection id="customBook">
      <Row>
        <SectionHeader header="Pick a Course" subheader="" />
        <Container className="course-container">
        {items.map((item) => {
          return <CourseCard item={item} key={item.itemId} />;
        })}
      </Container>
      </Row>
      
    </PageSection>
  );
};

export default CustomBook;


const CourseCard = ({ item }) => {
  return (
    <div className="course-card-wrapper">
      <Card className="course-card" key={item.itemId}>
        <Card.Img className="course-card-image" variant="top" src={item.image["1"].url} />
        <Card.Title>{item.title}</Card.Title>
        <Card.Body>
          <Button
            size="lg"
            variant="primary"
            className="text-uppercase book-button"
            href={`https://quadraticsound.checkfront.com/reserve?item_id=${item.itemId}`}
          >
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

CourseCard.propTypes = {
  item: PropTypes.shape({
    itemId: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.object,
    summary: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
};

const Course = ({ item }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="course" key={item.itemId}>
      <a role="button" tabIndex={0} onClick={() => setShowMore(!showMore)}>
        <h2 className="course-title" key={item.itemId}>
          {item.title}
        </h2>
      </a>
      <Row>
        <Col lg={4} className="order-lg-8">
          <div className="course-image">
            <img className="img-fluid" src={item.image["1"].url} alt={item.title} />
            <Button
              size="xl"
              variant="primary"
              className="text-uppercase"
              href={`https://quadraticsound.checkfront.com/reserve?item_id=${item.itemId}`}
            >
              Book Now
            </Button>
          </div>
        </Col>
        <Col lg={8}>
          <div className="course-description" dangerouslySetInnerHTML={{ __html: item.summary }} />
          {!showMore && (
            <a
              className="show-more"
              role="button"
              tabIndex={-1}
              onClick={() => setShowMore(!showMore)}
            >
              (Read More)
            </a>
          )}
        </Col>
      </Row>
      {showMore && (
        <div>
          <div className="course-description" dangerouslySetInnerHTML={{ __html: item.details }} />
          <a
            className="show-more"
            role="button"
            tabIndex={-1}
            onClick={() => setShowMore(!showMore)}
          >
            (Show Less)
          </a>
        </div>
      )}
    </div>
  );
};

Course.propTypes = {
  item: PropTypes.shape({
    itemId: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.object,
    summary: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
};
