import React , {useRef, useEffect}from "react";
import classes from "../CSS/Container.module.css";

const Container = (props) =>{
    
    const topRef = useRef(null);

    

    useEffect(()=>{
        props.topRef(topRef);

    },[topRef])
    
    return  <div className={classes.container} ref={topRef}>
            {props.children}
        </div>





    
} 

export default Container;