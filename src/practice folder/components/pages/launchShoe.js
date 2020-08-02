import React, {useContext} from'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import {shoes} from "../context/api";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Data} from "../context/Store"

const useStyles = makeStyles({
mainDiv:{
    marginTop: "100px",
    textAlign: "center",
},
    name:{
    color: "blue",
    fontWeight: "bolder",

},
Button:{
    height: "50px",
    width:  "250px",
    fontWeight: "bold",
},
buttonIcon:{
    paddingRight: "15px",
}
   
});

export default function LaunchShoe(){
const {addVal} = useContext(Data);

const classes = useStyles();

// console.log(useParams());
const { slug } = useParams();
const shoe = shoes[slug];

if (!shoe){
    return <h1>404 not found!</h1>
}
const {name , img} = shoe;
return(
    <div className={classes.mainDiv}>
        <h1 className={classes.name}>{name}</h1>
        <h2>{slug}</h2>
        <img src={img} alt="shoe" width="60%" height="60%"/>
        
        <p>
      
        <Button variant="contained" color="secondary" className={classes.Button} onClick={()=>addVal(name, img, slug)}>
          <AddShoppingCartIcon className={classes.buttonIcon}/>
        Add to Cart
      </Button>
            
        </p>
    </div>
    )
}