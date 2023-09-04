import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'

function PlaceHolderConponent() {
  return (
    <Card className=' p-2' >
        <Placeholder as='p' animation="wave">
        <Placeholder xs={12} />
        <Placeholder xs={6} />
        <Placeholder xs={10} />
        <Placeholder xs={12} />
      </Placeholder>
    </Card>
  )
}

export default PlaceHolderConponent