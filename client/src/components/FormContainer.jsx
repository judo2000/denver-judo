import { Container, Row, Col } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Row className="justify-content-md-center">
      <Col xs={12} md={10}>
        <Container className="form_container">
          <div className="px-5 py-2">{children}</div>
        </Container>
      </Col>
    </Row>
  );
};

export default FormContainer;
