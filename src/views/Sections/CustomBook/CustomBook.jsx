import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import { sortBy } from "underscore";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import { Row, Col, Button } from "react-bootstrap";

import "./CustomBook.scss";

const CustomBook = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("api/checkfrontAPI", {
        params: { route: "item", category_id: 37 },
      })
      .then((res) => {
        setItems(sortBy(Object.values(res.data.items), "pos").reverse());
      })
      .catch((err) => {
        console.log("Error: ", err.message);
      });
  }, []);

  console.log(items);

  return (
    <PageSection id="customBook">
      <Row>
        <SectionHeader header="Pick a Course" subheader="" />
      </Row>
      {items.map((item) => {
        return <Course item={item} key={item.item_id} />;
      })}
    </PageSection>
  );
};

export default CustomBook;

const Course = ({ item }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="course" key={item.item_id}>
      <a role="button" tabIndex={0} onClick={() => setShowMore(!showMore)}>
        <h2 className="course-title" key={item.item_id}>
          {item.name}
        </h2>
      </a>
      <Row>
        <Col lg={4} className="order-lg-8">
          <div className="course-image">
            <img className="img-fluid" src={item.image["1"].url} alt={item.name} />
            <Button
              size="xl"
              variant="primary"
              className="text-uppercase"
              href={`https://quadraticsound.checkfront.com/reserve?item_id=${item.item_id}`}
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
    item_id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.object,
    summary: PropTypes.string,
    details: PropTypes.string,
  }).isRequired,
};
