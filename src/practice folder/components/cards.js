import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Background from "../images/slide-image-1.jpg";
import {shoes} from "./context/shoes";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 10,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
 div:{
   marginTop: 100,
   dispay: "flex",
    flexWrap: "wrap",
 }
}));

export default function _Card() {
  const classes = useStyles();
  return (
    <div className={classes.div}>
    
          {/* <>
          <h3>{}</h3>
            <h4>{shoes[item].name}</h4>
            <img src={shoes[item].img} alt="shoe" />
          </> */}
       
    {
      Object.keys(shoes).map((item)=>{
        // console.log(shoes[item])
        return(
            <Card className={classes.root}>
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
       
        
    </Card>
 )
})

}

      </div>  );
}
