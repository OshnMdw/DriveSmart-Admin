import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import FrameComponent from '../components/FrameComponent';

function IncomeView() {
  return (
    <FrameComponent>
        <Container >
            <Row className=' m-2'>
                <h3 className=' text-center'>Income by Upgrade - 2023</h3>
            </Row>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Month</th>
          <th>Income</th>
          <th>Refund</th>
          <th>Total income</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>20,000/=</td>
          <td>1,000/=</td>
          <td>19,000/=</td>
        </tr>
        <tr>
          <td>2</td>
          <td>40,000/=</td>
          <td>4,000/=</td>
          <td>36,000/=</td>
        </tr>
        <tr>
          <td>3</td>
          <td>30,000/=</td>
          <td>5,000/=</td>
          <td>25,000/=</td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </FrameComponent>
  )
}

export default IncomeView
