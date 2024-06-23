import React from "react";
import { Modal } from "react-bootstrap";

const EventModal = ({ show, handleClose }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>testing modal</Modal.Body>
    </Modal>
  );
};

export default EventModal;
