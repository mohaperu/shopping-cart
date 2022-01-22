import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return <div className='box'>

    <Form>
      <Form.Text style={{ fontSize: 40, paddingLeft: 125, paddingBottom: 20 }}>Login</Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control style={{ width: 350 }} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button style={{width:"100%"}} variant="primary" type="submit">
        Login
      </Button><br/>
      
      <Link to="/register"><Form.Text className='register-btn'>Register?</Form.Text></Link>

      
    </Form>


  </div>;
};

export default Login;
