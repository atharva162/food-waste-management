import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function contact() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          About
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          MediSocialplus
        </Typography>
        <Typography variant="body2" component="p">
         MediSocialplus is an online application aimed to connect you and medical stores around you.
          <br />
          MediSocialplus is open to all the users and medical stores for consumption
          <br/>
          You can use MediSocialplus to:-
          <ul>
              <li>Post a medicine you need by just uploading its name and image(if available), which will be seen by all the medical stores registered in the MediSocial.</li>
              <li>Find out the medical stores registered in the application with their name, contact number and address</li>
              <li>Get direct updates to your posted medicine in your contact number through text message</li>
              <li>Register your nearby medical store and remain connected with it</li>
              <li>Register your shop(if you are the owner) and get direct updates of the customers connected directly in your message box and respond to their posts if you have that medicine</li>
          </ul>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Developers
        </Typography>
        <Typography variant="body2" component="p">
          Atharva Srivastava : Founder
          <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary"><Link to="/contact">Contact us</Link></Button>
      </CardActions>
    </Card>
    <p className="w-100 text-center mt-2">
    &#169; reserved by Atharva Srivastva</p>
    </div>
  );
}

