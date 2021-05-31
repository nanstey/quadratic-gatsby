import React, { useState } from "react";
import PropTypes from "prop-types";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import { Container, Row, Card, Dropdown, Spinner } from "react-bootstrap";
import { range } from "underscore";

import useItems from "../../../hooks/useItems";

import "./CustomBook.scss";

const CustomBook = () => {
  const items = useItems();
  const [selectedAge, setSelectedAge] = useState(null);

  return (
    <PageSection id="CustomBook">
      <Row>
        <SectionHeader header="Pick a Camp" subheader="" />
        <Container className="course-container">
          {items.length ? (
            <div className="course-filters">
              <Dropdown>
                <Dropdown.Toggle className="dropdown-primary" variant="primary" id="dropdown-basic">
                  {selectedAge ? `Age: ${selectedAge}` : "Select Age"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {range(6, 15).map((age) => (
                    <Dropdown.Item key={age} onClick={() => setSelectedAge(age)}>
                      {age}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
              <div className="center-align">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
          )}
          {items.map((item) => {
            const active =
             
              !selectedAge || (selectedAge >= item.ageMin && selectedAge <= item.ageMax);
            return <CourseCard key={item.itemId} item={item} active={active} />;
          })}
        </Container>
      </Row>
    </PageSection>
  );
};

export default CustomBook;

const CourseCard = ({ item, active }) => {
  const itemTooltip = item.available ? "Book Now" : "Join Waitlist";
  const baseUrl = "https://quadraticsound.checkfront.com/reserve?item_id=";
  const dateString = item.dateStart.format("YYYYMMDD");

  const activeClass = active ? 'active' : 'inactive';

  const itemLink = item.available
    ? `${baseUrl}${item.itemId}`
    : `${baseUrl}155&start_date=${dateString}`;

  return (
    <div className="course-card-wrapper">
      <a target="_blank" rel="noreferrer" href={itemLink} title={itemTooltip}>
        <Card className={`course-card ${activeClass}`} key={item.itemId}>
          {!item.available && <span className="sold-out">SOLD OUT</span>}
          <Card.Img className="course-card-image" variant="top" src={item.image["1"].url} />
          <Card.Body className="course-card-body">
            <div className="badge-container">
              <span className="badge badge-pill badge-primary">{`Ages ${item.ageMin}-${item.ageMax}`}</span>
              <span className="badge badge-pill badge-info">
                {item.dateStart.format("MMM D")}-{item.dateEnd.format("D")}
              </span>
              <span className="badge badge-pill badge-success">{item.price}</span>
            </div>
          </Card.Body>
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
    price: PropTypes.string,
    available: PropTypes.number,
    ageMin: PropTypes.number,
    ageMax: PropTypes.number,
    dateStart: PropTypes.object,
    dateEnd: PropTypes.object,
  }).isRequired,
  active: PropTypes.bool.isRequired
};
