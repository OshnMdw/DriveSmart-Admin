import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
    const navigate = useNavigate()
    const handlePasswordUpdate = () => {
        navigate("/passwordupdated",{replace:true})
    }
    return (
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="blurEffect" style={{ width: '500px' }}>
                <h1 className="mb-4">RESET PASSWORD</h1>
                <>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Re-enter password"
                        className="mb-3"
                        style={{ fontSize: 'small' }}
                    >
                        <Form.Control type="password" placeholder="Re-enter password" />
                    </FloatingLabel>
                </>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button className="mb-3 task-button" onClick={handlePasswordUpdate} >Reset password</Button>
                </div>





            </div>
        </div >

    )
}