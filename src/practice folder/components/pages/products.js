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
import {shoes} from "../context/shoes";
// import {getAllProducts} from "./context/shoeApi";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "360px",
    // margin: "0 5vh",
    margin: "0 auto",
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
   marginTop: 100,
  //  border: "1px solid black"
 }
}));

export default function Products() {
  // const [products, setProducts] = useState([]);
  const classes = useStyles();

// useEffect( () => {
   
//       getAllProducts().then( data => {
//         // console.log(data)
//         setProducts(data);
//         // update_all_products(data);
//       })
//     // }
//   },[])
  

return (

    <div className={classes.div}>

          {/* <>
          <h3>{}</h3>
          <h4>{shoes[item].name}</h4>
          <img src={shoes[item].img} alt="shoe" />
        </>  */}
<Paper elevation={3} className={classes.paper} >

<Grid container spacing={2}>
{
Object.keys(shoes).map((item)=>{
        // console.log(shoes[item])
        return(
<Grid xs="12" sm="4">
    
    <Card className={classes.root}>
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>        
    </Card>
    </Grid>
 )
})

}
</Grid>
</Paper>

      </div>  );
}
