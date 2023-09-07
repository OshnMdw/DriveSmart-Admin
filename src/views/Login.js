import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import ButtonContext from "../context/ButtonContext";


export default function Login() {
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4" style={{textAlign:'center'}}>LOGIN</h1>
                <Form>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control type="email" size="sm" placeholder="name@example.com" required/>
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        // className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control  type="password" placeholder="Password" required />
                    </FloatingLabel>
                                                                                                                           
                
                <div style={{textAlign:'left'}}>
                <Link to='/resetpassword' style={{fontSize:12,}}>
                            Forgot your password?
                            </Link>               
                </div>

                <div style={{ display: 'flex', flexDirection: 'column',marginTop: '50px'}}>
                    <Button type="submit" className="mb-3 task-button">Login</Button>
                    
                    {/* <hr className="hr-lines"/>
                    <p>OR</p> */}
                    <p className="hr-line"><span>OR</span></p>

                    <Button type="submit" className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: 1 / 3, textAlign: 'start' }}>
                            <i class="bi bi-google"></i>
                        </div>
                        <div style={{ flex: 2 / 3, textAlign: 'start' }}>
                            Login with Google
                        </div>


                    </Button>
                    <Button className="mb-3 task-button" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ flex: 1 / 3, textAlign: 'start' }}>
                            <i class="bi bi-facebook"></i>
                        </div>
                        <div style={{ flex: 2 / 3, textAlign: 'start' }}>
                            Login with Facebook
                        </div>
                    </Button>
                </div>
                </Form>





            </div>
        </div >

    )
}