import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles } from '@material-ui/core/styles';
import NavbarList from './NavbarList';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "visible",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: "1vw",
    // display: 'none',
    width: "80vw",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <AppBar position="fixed" color="primary" style={{overflow: "visible"}}>
        <Toolbar>
          
        <NavbarList />

          <Typography className={classes.title} variant="h6" noWrap>
            Shoe Store App
          </Typography>

              <Typography style={{width: "100%",textAlign: "right"}}>
  <Link to="/cart" >
                  <IconButton aria-label="add to favorites" style={{color: "white"}}>
                    <Badge badgeContent={2} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
    </Link>
              </Typography>
              


        </Toolbar>
      </AppBar>
    </div>
  );
}
