import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://backend-shopping-cart.herokuapp.com/api/users";
            const { data: res } = await axios.post(url, data);
            window.location="/login"
            console.log(res.message);
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }

    return <div className='box'>
        <Form onSubmit={handleSubmit}>
            <Form.Text style={{ fontSize: 40, paddingLeft: 115, paddingBottom: 20 }}>Register</Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Username</Form.Label>
                <Form.Control onChange={handleChange} value={data.username} name="username" style={{ width: 350 }} type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control onChange={handleChange} value={data.email} name="email" style={{ width: 350 }} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} value={data.password} name="password" type="password" placeholder="Password" />
            </Form.Group>
            {error&&<div>{error}</div>}
            <Button style={{ width: "100%" }} variant="primary" type="submit">
                Signup
            </Button>

        </Form>

    </div>;
};

export default Register;
