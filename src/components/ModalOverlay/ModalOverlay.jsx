import React from "react";
import PropTypes from "prop-types";

import { Modal } from "react-bootstrap";
import Icon from "components/Icon";

import "./ModalOverlay.scss";

const ModalOverlay = ({ show, onHide, closeModal, setLeft, setRight, children }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="modal-overlay"
      centered
    >
      <div className="close-icon">
        <Icon onClick={closeModal} iconName="CloseIcon" size="3x" />
      </div>
      <div className="chevron chevron-left">
        <Icon onClick={setLeft} iconName="ChevronLeft" size="3x" />
      </div>
      <div className="chevron chevron-right">
        <Icon onClick={setRight} iconName="ChevronRight" size="3x" />
      </div>
      {children}
    </Modal>
  );
};

ModalOverlay.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  closeModal: PropTypes.func,
  setLeft: PropTypes.func,
  setRight: PropTypes.func,
  children: PropTypes.node,
};

ModalOverlay.defaultProps = {
  show: false,
  onHide: null,
  closeModal: null,
  setLeft: null,
  setRight: null,
  children: null,
};

export default ModalOverlay;
