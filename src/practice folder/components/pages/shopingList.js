import React, {useContext} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import img from "../../images/slide-image-1.jpg";
import {Data} from "../context/Store"

const useStyles = makeStyles((theme) => ({
  _margin:{
    paddingTop: "60px",

  },
  root: {
    display: 'flex',
    width: "100%",
    // border: "1px solid black",

    // marginLeft: "30px",
    // width: "40vw",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    // border: "1px solid black",

  },
  content: {
    flex: '1 0 auto',
  },
  cardLi:{
    display: "flex",
        // border: "1px solid blue",
    marginTop: "30px",
  },
  image: {
    width: 170,
  },
  num:{
    marginRight: "20px",
    textAlign: "center",
    marginTop: 6,
    paddingTop: 4,
    backgroundColor: "red",
    borderRadius: "50%",
    color: "white",
    height: "27px",
    width: "27px",
  }
}));

export default function ImageList() {
  const {data, deleteVal} = useContext(Data);
 
  const classes = useStyles();
  const theme = useTheme();
  var num = 0;
  return (
<ol style={{paddingLeft: 5}}>

{data.map(({name, img, title, id, prize}) =>{

  return(
    <li className={classes.cardLi} key={id}>
    <div className={classes.num}>{num = num + 1}</div>
    <Card className={classes.root}>
    <CardMedia
            className={classes.image}
            image={img}
            title={name}
          />
    
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {name }<h5 style={{display: "inline", marginLeft: "10px"}}> {prize}$</h5>
                <IconButton aria-label="CloseIcon" style={{float: "right"}} onClick={()=>{deleteVal(id)}}>
                <CloseIcon />
            </IconButton>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
            </CardContent>
           </div>
    
        {/* </Grid> */}
            </Card>
       
            
        </li>
  )
  })}    
</ol>
  );
}

/*{ <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div> */
