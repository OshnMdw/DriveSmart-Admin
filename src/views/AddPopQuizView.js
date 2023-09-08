import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TinyMCEEditor from '../components/TinyMCEEditor';

function AddPopQuizView() {
  return (
    <Container className=' mt-3 p-2 vh-100'>
        <Row className=' h-50'>
            <h4 className=' text-center '>Add PopQuiz </h4>
            <Col  xs={10} className='shadow-sm m-auto p-3 border border-1 rounded rounded-2'> 
                <Form>
                <Row>
                    <Col>  
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Question</Form.Label>
                            <Form.Select >
                                <option>Select One Question</option>
                                <option>Question - 01</option>
                                <option>Question - 02</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>  
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Pop time</Form.Label>
                            <Form.Control type='number' placeholder="Enter time in sec" />
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
  );
}

export default AddPopQuizView;