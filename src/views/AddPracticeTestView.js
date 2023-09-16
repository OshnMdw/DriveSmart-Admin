import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FrameComponent from '../components/FrameComponent';

function AddPracticeTestView() {
  return (
    <FrameComponent>
    <Container className=' mt-3 p-2 vh-100'>
    <Row className=' h-50'>
        <h4 className=' text-center '>Practice test name</h4>
        <Col  xs={10} className='shadow-sm m-auto p-3 border border-1 rounded rounded-2'> 
            <Form>
            <Row>
                <Col>  
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Practice test name</Form.Label>
                        <Form.Control type='test' placeholder="Practice test name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Button className=' mx-auto col-6 ' variant="success" >
                    Save Changes
                </Button>
            </Row>
            
            </Form>
        </Col>
    </Row>
    </Container>
    </FrameComponent>
  )
}

export default AddPracticeTestView
