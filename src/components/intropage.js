import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { Container } from "react-bootstrap"
import image from '../images/logo.jpg'

function homepage() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      window.location='/';
    }else{
       console.log('Sign In to continue')
    }
  }, [])
  return <div>
      <h3 className="w-100 text-center mt-2">
      Welcome to Food Waste Management Web-app!!</h3>
      <br/>
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "40vh" }}>
  <Card>
      <Card.Body>
      <Button variant="contained" disableElevation>
      <Link to ="/choice" style={{color: "inherit" }}>Create an Account</Link>
      </Button>
      <br/>
      <Button variant="contained" color="primary" disableElevation>
      <Link to ="/login"  style={{color: "inherit" }}>
     Already have an account? Log In</Link>
    </Button>
      </Card.Body>
  </Card>
  </Container>
  </div>
}

export default homepage
