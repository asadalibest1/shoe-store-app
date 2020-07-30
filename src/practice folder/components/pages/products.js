import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Background from "../images/slide-image-1.jpg";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Paper from '@material-ui/core/Paper';
import {shoes, Shop} from "../context/api";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heading:{
    textAlign: "center",
    color: "red",
  },
  root: {
    width: "380px",
    // margin: "0 5vh",
    margin: "auto",
    // border: "1px solid black",
    // display: "inline-block"
    
  },
  paper:{
    // height: "100vh",
    paddingTop: "50px",
    paddingBottom: "50px",

  },
 
  media: {
    height: "22vh",
    // width: "35vw",
    paddingTop: '56.25%', // 16:9
  },
 div:{
   padding: "0px 5px",
   margin: "90px 10px 0px 10px",
  //  border: "1px solid black"
 }
}));

export default function Products() {
  const [products, setProducts] = useState([]);
  const classes = useStyles();

const prize = [30, 29, 27, 32, 23, 26];

return (
  <>
<div className={classes.div}>
<h1 className={classes.heading}>Visite Your Favourite Product Here</h1>
{/* // {console.log(products)} */}
          {/* <>
          <h3>{}</h3>
          <h4>{shoes[item].name}</h4>
          <img src={shoes[item].img} alt="shoe" />
        </>  */}
<Paper elevation={3} className={classes.paper} >

<Grid container spacing={2}>
{
Object.keys(shoes).map((item, ind)=>{
        // console.log(shoes[item])
        return(
<Grid xs="12" sm="4">
<Link to={"/products/"+item} >  
    <Card key={item} className={classes.root}>
      <CardActionArea>
      <CardMedia
        className={classes.media}
        image={shoes[item].img}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p>{item}</p>
          {shoes[item].name}
          </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
      <IconButton aria-label="shop" color="secondary">
          <AddShoppingCartIcon />
        </IconButton>
        <h4>{prize[ind]}$</h4>
        
        
      </CardActions>        
    </Card>
    </Link>
    </Grid>
 )
})

}
</Grid>
</Paper>

      </div> 
      </>
      );

}
