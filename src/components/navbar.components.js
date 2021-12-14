import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import HomeIcon from '@material-ui/icons/Home';
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Food Waste Management Web-app
          </Typography>
          <Button color="inherit"><Link to="/" style={{color: "inherit" }}><HomeIcon/></Link></Button>
         {/* <Button color="inherit"><Link to="/about" style={{color: "inherit" }}><InfoIcon/></Link></Button> */}
          <Button color="inherit"><Link to="/contact" style={{color: "inherit" }}><PermPhoneMsgRoundedIcon/></Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
