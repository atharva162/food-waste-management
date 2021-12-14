import React, { useState, useEffect } from 'react'
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import { Container } from "react-bootstrap"
import axios from 'axios';
import { TextField } from '@material-ui/core'

    function login() {
    const [username, setUsername] = useState("");
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
        if (username.length<10) {
        return setError("Please enter correct 10 digit mobile no.")
        }try {
          setError("")
          setLoading(true)
          const response = await axios.post("https://medisocial.herokuapp.com/auth/login", {username})
          if(response.data=='User not found'){
            setLoading(false)
            console.log(response.data)
            return setError('User not found, please try signing up')
          }
          localStorage.setItem('user', JSON.stringify(response.data))
          history.push("/");
        } catch {
          setError("Failed to connect, please check your network and try again")
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
                   <h2 className="text-center mb-4">Enter your 10 digit mobile.no which you have registered before</h2>
                   {error && <Alert variant="danger">{error}</Alert>}
                   <Form onSubmit={handleSubmit}>
                   <TextField type="number" variant="outlined" fullWidth required label="Enter your 10 digit mobile no." value={username} onChange={(e) => setUsername(e.target.value)} />
                   <Button disabled={loading} className="w-100" type="submit">
                   Log In
                   </Button>
                   </Form>
                   </Card.Body>
               </Card>
           </Container>
        </div>
    )
}

export default login
