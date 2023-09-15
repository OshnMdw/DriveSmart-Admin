import React, { useEffect, useState } from 'react'
import { Card, Container, Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FrameComponent from '../components/FrameComponent'





function AllPracticeTestView() {
    const [tests,setTests] = useState([])
    useEffect(()=>{
        let temTest = [
            {
                id:"01",
                title:"Practice Test - 01"
                
            },
            {
                id:"02",
                title:"Practice Test - 02"
                
            },
            {
                id:"03",
                title:"Practice Test - 03"
                
            },
            {
                id:"04",
                title:"Practice Test - 04"
                
            },
            {
                id:"05",
                title:"Practice Test - 05"
                
            }
        ]

        setTests(temTest)
    })
  return (
    <FrameComponent>
        <Container>
            <Row>
                <h3 className=' text-center'>All Practice Tests</h3>
            </Row>
            <Row>
                <Col>
                    { tests.map((test)=>(<div className='d-flex m-3 bg-secondary-subtle p-3 shadow-sm rounded-2 justify-content-between align-items-center'>
                        <div>
                            <h5>{test.title}</h5>
                        </div>
                        <div>
                            <span>
                                <Link to="/allquizzes">
                                    <i class="bi bi-pencil-square p-2 " style={{cursor:'pointer'}}/>
                                </Link>
                            </span>
                            <span>
                                <Link>
                                    <i class="bi bi bi-trash p-2 p-2 " style={{cursor:'pointer'}}/>
                                </Link>
                                
                            </span>
                        </div>
                    </div>))}
                    
                    <div className=' d-flex justify-content-end w-100 p-0'>
                        <Link to="/addpracticetest">
                            <i style={{fontSize:'36px'}} class="bi m-0 p-0 bi-plus-circle-fill text-end"></i>
                        </Link>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </FrameComponent>
  )
}

export default AllPracticeTestView
