import React from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import FrameComponent from "../components/FrameComponent";

function AddQuizView() {
  return (
    <FrameComponent>
      <Container className=" mt-3 p-2">
        <h4 className=" text-center  ">Add Quiz</h4>
        <Form className=" shadow-sm mt-5 p-3 border border-2 rounded-2">
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Question</Form.Label>
                <Form.Control type="text" placeholder="Enter question" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Feedback for correct</Form.Label>
                <Form.Control type="text" placeholder="Enter feedback" />
              </Form.Group>
            </Col>
          </Row>
          <Row className=" mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Select>
                  <option className=" text-muted">Select Question Type</option>
                  <option>Multiple-Answer Question</option>
                  <option>Single-Correct Answer Question</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Feedback for wrong</Form.Label>
                <Form.Control type="text" placeholder="Enter feedback" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-0  p-0">
            <Col lg={5} className=" m-0 p-0 me-auto">
              <Form.Group className="mb-3 w-100 p-0 m-0" id="formGridCheckbox">
                <div className="d-flex flex-row   align-items-center w-100 m-0 p-0">
                  <div className=" flex-grow-0 m-0 p-0">
                    <Form.Check className=" m-0 pe-1" type="checkbox" />
                  </div>
                  <div className=" flex-fill">
                    <Form.Control type="text" placeholder="Enter option" />
                  </div>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-0  p-0">
            <Col lg={5} className=" m-0 p-0 me-auto">
              <Form.Group className="mb-3 w-100 p-0 m-0" id="formGridCheckbox">
                <div className="d-flex flex-row   align-items-center w-100 m-0 p-0">
                  <div className=" flex-grow-0 m-0 p-0">
                    <Form.Check className=" m-0 pe-1" type="checkbox" />
                  </div>
                  <div className=" flex-fill">
                    <Form.Control type="text" placeholder="Enter option" />
                  </div>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mx-0  p-0">
            <Col className=" m-0" lg={5}>
              <div className=" d-flex justify-content-end w-100 p-0">
                <i
                  style={{ fontSize: "36px" }}
                  class="bi m-0 p-0 bi-plus-circle-fill text-end"
                ></i>
              </div>
            </Col>
          </Row>

          <Row>
            <Button className=" mt-3 mx-auto col-6 " variant="success">
              Save Changes
            </Button>
          </Row>
        </Form>
      </Container>
    </FrameComponent>
  );
}

export default AddQuizView;
