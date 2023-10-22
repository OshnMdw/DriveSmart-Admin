import { Tooltip } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function ShowHeadingComponent({index,title, body}) {
  return (
    <Accordion style={{margin : 10}}>
      <Accordion.Item eventKey={index}>
        <Accordion.Header>
            <div>
            <p className='paragraph' style={{alignSelf : 'center',marginBottom : 0}}>{title}</p>
            </div>            
           </Accordion.Header>
        <Accordion.Body>
         {body.map((item)=>
            <div style={{display : 'flex',flexDirection : 'row'}}>
                <div style={{display : 'flex',flex : 1/2}}>
                <p>{item}</p>
                </div>
                <div style={{display : 'flex',flex : 1/2,justifyContent : 'flex-end'}}>    
                    <i style={{marginRight : 10}} class="bi bi-trash"></i>
                    <Link to={ item === "Quiz" ? '/allquizzes' : ((item === "Pop quiz")? '/allpopquizzes' : '/editvideo' )}>
                      <i class="bi bi-pencil-square"></i>
                    </Link>
                    
                </div>
            
            </div>
        )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ShowHeadingComponent;