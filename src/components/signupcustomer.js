import React, { useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import axios from 'axios';
import { TextField } from '@material-ui/core'

function signupcustomer() {
  const [userData, setUserData] = useState({ username: '', customername: ''});
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      window.location='/';
    }else{
       console.log('Sign In to continue')
    }
  }, [])
  async function handleSubmit(e) {
    e.preventDefault()
    if (userData.username.length<10) {
      return setError("Please enter correct 10 digit mobile no.")
    }try {
      setError("")
      setLoading(true)
      const response = await axios.post("https://medisocial.herokuapp.com/auth/register/customer", userData)
      if(response.data=='User already exists'){
        setLoading(false)
       return setError('This mobile no. is already registered')
      }
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push("/");
    } catch {
      setError("Failed to create account, please check your network and try again")
      setLoading(false)
    }
  }

    return (
        <div>
          <Container
          className="d-flex align-items-center justify-content-center"
           style={{ minHeight: "40vh" }}>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                <TextField type="number" variant="outlined" fullWidth required label="Enter your 10 digit mobile no." value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                <TextField required name="customername" variant="outlined" label="Enter NGO's name" fullWidth value={userData.customername} onChange={(e) => setUserData({ ...userData, customername: e.target.value })} />
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
                </Form>
                </Card.Body>
            </Card>
            </Container>
        </div>
    )
}

export default signupcustomer
