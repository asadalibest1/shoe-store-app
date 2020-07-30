import React from'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import img from "../../images/slide-image-1.jpg";

const useStyles = makeStyles({
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
     
      // cartDiv:{
      //   display: "flex-inline",
      //   justifyContent: "column",
      // },
      cart:{
        height: "500px",
      },
      payment:{
        height: "220px",
      },
      list:{
        display: "inline",
      },
      h1:{
          textAlign: "center",
          color: "red",
      }
});
export default function Cart(props){
const classes = useStyles();
return(
  <div className={classes.root}>
        <h1 className={classes.h1}>Shoe Store made your Payment Easy</h1>
        
        {/* <Grid container spacing={2}> */}

        <Grid xs="12" sm="8">
        <Paper elevation={3} className={classes.cart}>
          <div className={classes.cartDiv}>
      <tr style={{display: "block"}}>
          <td style={{border: "1px solid black", height: "fit-content"}}>       
            <img src={img} alt="img" width="90px" height="90px"/>
          </td>
          <td style={{border: "1px solid black", height: "fit-content"}}>
            {/* <h3>Name</h3> */}
            <h3 style={{border: "1px solid black", margin: 0}}>h3</h3>
            <h3 style={{border: "1px solid black", margin: 0}}>h4</h3>
            </td>
        </tr>
            </div>
          </Paper>

        </Grid>

        <Grid xs="12" sm="3">
       
       
        <Paper elevation={2} className={classes.payment}>
          sdgsadg
          </Paper>

        </Grid>

        {/* </Grid> */}
  
          </div>
    )
}