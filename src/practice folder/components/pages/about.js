import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import SchoolIcon from '@material-ui/icons/School';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: "100px 15px 10px 15px",
    '& > *': {
    
      fontFamily: "Arial, Helvetica, sans-serif",
      width: "100%",
      height: "fit-content",
      padding: "20px",
    },
  },
  p:{
      fontSize: "14px"
  },
  h1:{
    color: "skyblue",
  },
  bio:{
    padding: 0,
    margin: 0,
    color: "purple"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>

    <h1 className={classes.h1}>About me</h1>
            <h3 className={classes.bio}>
            <IconButton edge="start" color="inherit" aria-label="Name">
                        <PersonIcon />
                  </IconButton>
              Name: Asad Ali
            </h3>
            <h3 className={classes.bio}>
            <IconButton edge="start" color="inherit" aria-label="Name">
                        <AccountCircleIcon />
                  </IconButton>
            Occupation: MERN Stack Web Developer</h3>
            <h3 className={classes.bio}>
            <IconButton edge="start" color="inherit" aria-label="Name">
                        <GitHubIcon />
                  </IconButton>
            Github: github.com/asadalibest1</h3>
            <h3 className={classes.bio}>
            <IconButton edge="start" color="inherit" aria-label="Name">
                        <FacebookIcon />
                  </IconButton>
            Facebook: facebook.com/asadali.asad.355</h3>
            <h3 className={classes.bio}>
            <IconButton edge="start" color="inherit" aria-label="Name">
                        <SchoolIcon />
                  </IconButton>
            Student at: Freelance and Remote Work BootCamp 2020</h3>
      </Paper>
    </div>
  );
}
