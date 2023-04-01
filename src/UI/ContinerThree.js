import React ,{useRef, useEffect}from "react";
import classes from "../CSS/Container.module.css";

const ContainerThree = (props) =>{

     
    return <div className={classes.containerThree}  >
            {props.children}
        </div>





 } 

export default ContainerThree;