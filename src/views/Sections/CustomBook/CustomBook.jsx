import React, { useState } from "react";
import PropTypes from "prop-types";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import useItems from "../../../hooks/useItems";

import "./CustomBook.scss";

const CustomBook = () => {
  const items = useItems();

  return (
    <PageSection id="customBook">
      <Row>
        <SectionHeader header="Pick a Camp" subheader="" />
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
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://quadraticsound.checkfront.com/reserve?item_id=${item.itemId}`}
      >
        <Card className="course-card" key={item.itemId}>
          <Card.Img className="course-card-image" variant="top" src={item.image["1"].url} />
          <Card.Header className="course-card-header">
            <h5 className="course-card-title">{item.title}</h5>
          </Card.Header>
        </Card>
      </a>
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
