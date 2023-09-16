import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FrameComponent from '../components/FrameComponent'

function RefundView() {
  return (
    <FrameComponent>
        <Container>
            <Row>
                <h2 className=' text-center'>Refund</h2>
            </Row>
            <Container>
                <div className=' bg-secondary p-2 rounded-2'>
                    <h5 className=' text-center'>New Requests</h5>
                </div>
                <div className=' my-3 p-2 px-3 bg-primary-subtle rounded-3  ' >
                    <div className='d-flex justify-content-between align-items-center' >
                        <h6>Someone@gmail.com</h6>
                        <div>
                            <i style={{fontSize:30}} class="bi text-success px-3  bi-arrow-right-circle-fill"></i>
                            <i style={{fontSize:30}} class="bi text-danger px-3  bi-arrow-right-circle-fill"></i>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h6>Subscriped On: DD-MM-YYYY</h6>
                        <h6>Refund requested On: DD-MM-YYYY</h6>
                        <h6>Accessed Materials: 15%</h6>
                    </div>
                </div>
            </Container>

            <Container>
                <div className=' bg-secondary p-2 rounded-2'>
                    <h5 className=' text-center'>Accepted</h5>
                </div>
                <div className=' my-3 p-2 px-3 bg-primary-subtle rounded-3  ' >
                    <div className='d-flex justify-content-between align-items-center' >
                        <h6>Someone@gmail.com</h6>
                        
                    </div>
                    <hr/>
                    <div>
                        <h6>Subscriped On: DD-MM-YYYY</h6>
                        <h6>Refund requested On: DD-MM-YYYY</h6>
                        <h6>Accessed Materials: 15%</h6>
                    </div>
                </div>
            </Container>


            <Container>
                <div className=' bg-secondary p-2 rounded-2'>
                    <h5 className=' text-center'>Rejected</h5>
                </div>
                <div className=' my-3 p-2 px-3 bg-primary-subtle rounded-3  ' >
                    <div className='d-flex justify-content-between align-items-center' >
                        <h6>Someone@gmail.com</h6>
                        <div>
                            <i style={{fontSize:30}} class="bi text-success px-3  bi-arrow-left-circle-fill"></i>
                            
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <h6>Subscriped On: DD-MM-YYYY</h6>
                        <h6>Refund requested On: DD-MM-YYYY</h6>
                        <h6>Accessed Materials: 15%</h6>
                    </div>
                </div>
            </Container>
            
        </Container>
        
    </FrameComponent>
    
  )
}

export default RefundView
