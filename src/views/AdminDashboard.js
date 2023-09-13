import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import NavBarInner from "../components/NavBarInner";
import OutFrame from "../components/OutFrame";
import '../assets/CSS/adminDashboard.css'
import AdminCard from "../components/adminCard";
import ButtonContext from "../context/ButtonContext";


const AdminDashboard = () => {
    return (
        <OutFrame>
            <div style={{display : 'flex',justifyContent : 'center',alignItems : 'center',flexDirection : 'column'}}>

                <p className="PageHeading" style={{ textAlign: 'center', paddingTop: 10 }}>Welcome to Admin Panel</p>
                
                    <Card style={{width : '80%', border: 'none', boxShadow: 2,margin : 10}}>
                        <Card.Body style={{display : 'flex',flexDirection : 'column',width : '100%',justifyContent : 'center',alignItems : 'center'}}>
                            <Card.Title><p className="CourseHeading" style={{ textAlign: 'center' }}>Handle Study materials</p></Card.Title>
                            <div style={{display : 'flex',flexDirection : 'column',width : '80%',rowGap : 10 , justifyContent : 'center',alignItems:'center'}}>
                            <Button className="cardButton">Show all headings</Button>
                            <Button className="cardButton">Show all practice tests</Button>
                            </div>
                            
                            

                        </Card.Body>

                    </Card>

                    <Card style={{width : '80%', border: 'none', boxShadow: 2,margin : 10}}>
                        <Card.Body style={{display : 'flex',flexDirection : 'column',width : '100%',justifyContent : 'center',alignItems : 'center'}}>
                            <Card.Title><p className="CourseHeading" style={{ textAlign: 'center' }}>Handle Study materials</p></Card.Title>
                            <div style={{display : 'flex',flexDirection : 'column',width : '80%',rowGap : 10 , justifyContent : 'center',alignItems:'center'}}>
                            <Button className="cardButton">Show all users</Button>
                            <Button className="cardButton">Show all complaints</Button>
                            <Button className="cardButton">Show all refund requests</Button>
                            </div>
                            
                            

                        </Card.Body>

                    </Card>

                    <Card style={{width : '80%', border: 'none', boxShadow: 2,margin : 10}}>
                        <Card.Body style={{display : 'flex',flexDirection : 'column',width : '100%',justifyContent : 'center',alignItems : 'center'}}>
                            <Card.Title><p className="CourseHeading" style={{ textAlign: 'center' }}>Handle Study materials</p></Card.Title>
                            <div style={{display : 'flex',flexDirection : 'column',width : '80%',rowGap : 10 , justifyContent : 'center',alignItems:'center'}}>
                            <Button className="cardButton">Generate reports</Button>
                            
                            </div>
                            
                            

                        </Card.Body>

                    </Card>

            </div>


        </OutFrame>

    )
}

export default AdminDashboard;