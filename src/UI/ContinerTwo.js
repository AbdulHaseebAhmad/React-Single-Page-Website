import React , {useRef} from "react";
import { useEffect } from "react";
import classes from "../CSS/Container.module.css";

const ContainerTwo = (props) =>{

    const refOfContainer = useRef();

    useEffect(()=>{
        props.refOfContainer(refOfContainer);

    },[refOfContainer])
     
    
    return    <div className={classes.containerTwo}  ref={refOfContainer} style={props.style}>
            {props.children}
        </div>

} 

export default ContainerTwo;