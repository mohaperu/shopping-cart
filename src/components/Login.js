import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

  const [data, setData] = useState({
    email: "test@gmail.com",
    password: "Admin123@"
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://backend-shopping-cart.herokuapp.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/"
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

    <Form onSubmit={handleSubmit} >
      <Form.Text style={{ fontSize: 40, paddingLeft: 125, paddingBottom: 20 }}>Login</Form.Text>
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
        Login
      </Button><br />

      <Link to="/register"><Form.Text className='register-btn'>Register?</Form.Text></Link>


    </Form>


  </div>;
};

export default Login;
