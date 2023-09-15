import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ComplaintsCard = ({sender , complaintsDescription ,date}) => {
    const [option,setOption] = useState()
    return(
        <Card style={{ width: '80%',margin : 20 }}>
           
           
      <Card.Body>
        <Card.Title>Sender : {sender}</Card.Title>
        <Card.Text> Date : {date}</Card.Text>
        <Card.Text>
          {complaintsDescription}
        </Card.Text>
        <div style={{display : 'flex',flexDirection : 'row',columnGap : 10}}>
        <div>
        <Button 
            variant="success" 
            onClick={()=> setOption(true)}
            disabled={option}
            >Accept</Button>
        </div>
        <div>

        <Button 
            variant="danger"
            onClick={()=>setOption(true)}
            disabled={option}
            >Reject</Button>
        </div>

        </div>
        
        
        
      </Card.Body>
    </Card>

    )
}

export default ComplaintsCard;