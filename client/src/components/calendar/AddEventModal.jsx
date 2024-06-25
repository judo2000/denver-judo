import React, { useState } from "react";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import FormContainer from "../FormContainer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCreateEventMutation } from "../../slices/eventApiSlice";

const EventModal = ({ show, month, year, day, handleClose }) => {
  const [createEvent, { isLoading }] = useCreateEventMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createEvent({
        eventType,
      });
    } catch (error) {}
  };

  const [eventDate, setEventDate] = useState(day ? day : "");
  const [eventType, setEventType] = useState("");
  const [longDesc, setLongDesc] = useState("");

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add an Event for {`${month}-${day}-${year}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {day}
        <FormContainer>
          <Form id="myForm" onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} className="my-2">
                <Form.Label htmlFor="eventType">
                  <span className="required">*</span> Event Type
                </Form.Label>
                <Form.Select
                  id="eventType"
                  name="eventType"
                  required
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option value="">Select an event type...</option>
                  <option value="Class">Class</option>
                  <option value="Clinic">Clinic</option>
                  <option value="Tournament">Tournament</option>
                  <option value="Rank Test">Rank Test</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="my-2">
                <Form.Label htmlFor="eventName">
                  <span className="required">*</span> Event Name
                </Form.Label>
                <Form.Control
                  type="text"
                  id="eventName"
                  name="eventName"
                  placeholder="Enter event name"
                  required
                />
              </Form.Group>
            </Row>

            {(eventType === "Class" || eventType === "Clinic") && (
              <Row>
                <Form.Group as={Col} className="my-2">
                  <Form.Label htmlFor="instructors">
                    <span className="required">*</span> Instructors
                  </Form.Label>
                  <Form.Control
                    id="instructors"
                    name="instructors"
                    placeholder="Enter instructor(s)"
                    required
                  />
                </Form.Group>
              </Row>
            )}

            <Row>
              <Form.Group as={Col} className="my-2">
                <Form.Label htmlFor="eventDate">
                  <span className="required">*</span> Event
                  {(eventType === "Class" || eventType === "Clinic") &&
                    " Start "}
                  Date
                </Form.Label>
                <Form.Control
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row>
              <Col xs={6} className="my-2">
                <Row>
                  <Form.Group as={Col} className="my-2">
                    <Form.Label htmlFor="startTime">
                      <span className="required">*</span> Start Time
                    </Form.Label>
                    <Form.Control
                      type="time"
                      id="startTime"
                      name="startTime"
                      required
                    />
                  </Form.Group>
                </Row>
              </Col>
              <Col xs={6} className="my-2">
                <Row>
                  <Form.Group as={Col} className="my-2">
                    <Form.Label htmlFor="endTime">
                      <span className="required">*</span> End Time
                    </Form.Label>
                    <Form.Control
                      type="time"
                      id="endTime"
                      name="endTime"
                      required
                    />
                  </Form.Group>
                </Row>
              </Col>
            </Row>

            <Row>
              <Form.Group as={Col} className="my-2">
                <Form.Label htmlFor="shortDesc">Short Description</Form.Label>
                <Form.Control
                  as="textarea"
                  id="shortDesc"
                  name="shortDesc"
                  placeholder="Short description"
                  style={{ height: "100px" }}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="my-2">
                <Form.Label htmlFor="longDesc">Long Description</Form.Label>
                <ReactQuill
                  theme="snow"
                  id="longDesc"
                  name="longDesc"
                  className="quill-editor"
                  value={longDesc}
                  onChange={setLongDesc}
                />
              </Form.Group>
            </Row>

            <Row>
              <Col className="d-flex flex-column align-items-center gap-2">
                <Button
                  type="submit"
                  className="login_btn"
                  disabled={isLoading}
                >
                  Add Event
                </Button>
              </Col>
            </Row>
          </Form>
        </FormContainer>
      </Modal.Body>
    </Modal>
  );
};

export default EventModal;
