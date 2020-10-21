import React from "react";
import PropTypes from "prop-types";

import { Modal } from "react-bootstrap";

import "./ModalOverlay.scss";

const ModalOverlay = ({
  show,
  onHide,
  children
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal-overlay"
      centered
    >
      {children}
    </Modal>
  );
};

ModalOverlay.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  children: PropTypes.node,
};

ModalOverlay.defaultProps = {
  show: false,
  onHide: null,
  children: null
};

export default ModalOverlay;
