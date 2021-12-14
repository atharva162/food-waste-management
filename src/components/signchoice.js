import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { Container } from "react-bootstrap"


function signchoice() {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      window.location='/';
    }else{
       console.log('Sign In to continue')
    }
  }, [])
    return (
        <div>
             <h4 className="w-100 text-center mt-2">Sign up as a</h4>
            <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "40vh" }}
    >
  <Card>
      <Card.Body>
      <Button variant="contained" color="secondary" disableElevation>
      <Link to ="/signupcustomer" style={{color: "inherit" }}>NGO</Link>
      </Button>
      <br/>
      <Button variant="contained" color="primary" disableElevation>
      <Link to ="/signupshop"  style={{color: "inherit" }}>
       Restaurant</Link>
    </Button>
      </Card.Body>
  </Card>
  </Container>
        </div>
    )
}

export default signchoice
