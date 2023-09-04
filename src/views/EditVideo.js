import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TinyMCEEditor from '../components/TinyMCEEditor';

function EditVideo() {
  return (
    <Container className=' mt-3 p-2'>
        <Row>
            <h4 className=' text-center '>Video & Script Edit/Add</h4>
            <Col  xs={10} className='shadow-sm m-auto p-3 border border-1 rounded rounded-2'> 
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Video URL</Form.Label>
                    <Form.Control type="email" placeholder="Enter url" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <TinyMCEEditor/>
                </Form.Group>
                <Row>
                    <Button className=' mx-auto col-6 ' variant="success" >
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