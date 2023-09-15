import React, { useEffect, useState } from 'react'
import { Card, Container, Row,Col,Form , Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FrameComponent from '../components/FrameComponent'


function EditUserInfoView() {
  return (
    <FrameComponent>
    <Container className=' mt-3 p-2 mb-5 pb-5'>
    <Row className=' h-50'>
        <h4 className=' text-center '>Edit User Info</h4>
        <Col  xs={10} className='shadow-sm m-auto p-3 border border-1 rounded rounded-2'> 
            <Form>
            <Row>
                <Col>  
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type='test' disabled value={"Someone"} placeholder="User name" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='test' disabled value={"Someone@gmail.com"} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form.Group>
                    <Form.Label>Language</Form.Label>
                    <Form.Select>
                        <option >English</option>
                        <option>Sinhala</option>
                        <option>Tamil</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                    <Form.Label>Premium</Form.Label>
                    <Form.Select>
                        <option >Yes</option>
                        <option>No</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            

            
            <Row>
                <Button className=' mx-auto mt-3 col-6 ' variant="success" >
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

export default EditUserInfoView
