import React from "react";
import { Modal } from "react-bootstrap";

const EventModal = ({ show, month, year, day, handleClose }) => {
  console.log(month);
  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add an Event for {`${month}-${day}-${year}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{day}</Modal.Body>
    </Modal>
  );
};

export default EventModal;
