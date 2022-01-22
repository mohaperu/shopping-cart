import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return <div className='box'>
<Form>
      <Form.Text style={{ fontSize: 40, paddingLeft: 115, paddingBottom: 20 }}>Register</Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Username</Form.Label>
        <Form.Control style={{ width: 350 }} type="email" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control style={{ width: 350 }} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button style={{width:"100%"}} variant="primary" type="submit">
        Signup
      </Button>
      
    </Form>

    </div>;
};

export default Register;
