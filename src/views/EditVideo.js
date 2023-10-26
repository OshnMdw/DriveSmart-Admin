import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TinyMCEEditor from "../components/TinyMCEEditor";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

function EditVideo() {
  const { search } = useLocation();

  const query = React.useMemo(() => new URLSearchParams(search), [search]);
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/getTopics")
      .then((headings) => setHeadings(headings.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(headings[query.get("id")]);

  return (
    <Container className=" mt-3 p-2">
      <Row>
        <h4 className=" text-center ">Add/Edit Video & Script </h4>
        <Col
          xs={10}
          className="shadow-sm m-auto p-3 border border-1 rounded rounded-2"
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Video URL</Form.Label>
              <Form.Control
                type="email"
                defaultValue={headings.find(item => item.no==query.get("id"))?.videoUrl}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <TinyMCEEditor />
            </Form.Group>
            <Row>
              <Button className=" mx-auto col-6 " variant="success">
                Save Changes
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditVideo;
