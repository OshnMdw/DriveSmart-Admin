import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import NavBarInner from "../components/NavBarInner";
import FrameComponent from "../components/FrameComponent";
import '../assets/CSS/adminDashboard.css'
import HeadingsView from "./HeadingsView";
import { Link, redirect } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <FrameComponent>
            <div style={{display : 'flex',justifyContent : 'center',alignItems : 'center',flexDirection : 'column'}}>

                <p className="PageHeading" style={{ textAlign: 'center', paddingTop: 10 }}>Welcome to Admin Panel</p>
                
                    <Card style={{width : '80%', border: 'none', boxShadow: 2,margin : 10}}>
                        <Card.Body style={{display : 'flex',flexDirection : 'column',width : '100%',justifyContent : 'center',alignItems : 'center'}}>
                            <Card.Title><p className="CourseHeading" style={{ textAlign: 'center' }}>Handle Study materials</p></Card.Title>
                            <div style={{display : 'flex',flexDirection : 'column',width : '80%',rowGap : 10 , justifyContent : 'center',alignItems:'center'}}>
                            <Link role='button' className="cardButton btn" to='/headings'>Show all headings</Link>
                            <Link role='button' className="cardButton btn" to='/allpracticetests'>Show all practice tests</Link>
                            </div>
                            
                            

                        </Card.Body>

                    </Card>

                    <Card style={{width : '80%', border: 'none', boxShadow: 2,margin : 10}}>
                        <Card.Body style={{display : 'flex',flexDirection : 'column',width : '100%',justifyContent : 'center',alignItems : 'center'}}>
                            <Card.Title><p className="CourseHeading" style={{ textAlign: 'center' }}>Handle Study materials</p></Card.Title>
                            <div style={{display : 'flex',flexDirection : 'column',width : '80%',rowGap : 10 , justifyContent : 'center',alignItems:'center'}}>
                            <Link role='button' className="cardButton btn" to='/allusers'>Show all users</Link>
                            <Link role='button' className="cardButton btn" to='/headings'>Show all complaints</Link>
                            <Link role='button' className="cardButton btn" to='/headings'>Show all refund requests</Link>
                            </div>
                            
                            

                        </Card.Body>

                    </Card>

                    <Card style={{width : '80%', border: 'none', boxShadow: 2,margin : 10}}>
                        <Card.Body style={{display : 'flex',flexDirection : 'column',width : '100%',justifyContent : 'center',alignItems : 'center'}}>
                            <Card.Title><p className="CourseHeading" style={{ textAlign: 'center' }}>Handle Study materials</p></Card.Title>
                            <div style={{display : 'flex',flexDirection : 'column',width : '80%',rowGap : 10 , justifyContent : 'center',alignItems:'center'}}>
                            <Link role='button' className="cardButton btn" to='/headings'>Generate reports</Link>
                            </div>
                            
                            

                        </Card.Body>

                    </Card>

            </div>


        </FrameComponent>

    )
}

export default AdminDashboard;