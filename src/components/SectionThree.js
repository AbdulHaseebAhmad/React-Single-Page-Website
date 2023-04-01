import React ,{useRef} from "react";
import { useEffect } from "react";
import classes from "../CSS/SectionThree.module.css";

const SectionThree = (props) => {
    const refOfContainer = useRef(null); 

    useEffect(()=>{
        props.forwardRefference(refOfContainer);

    },[refOfContainer])
   
   
    return <div className={classes.sectionThree} ref={refOfContainer}>

                <div className={classes.sectionThreeTop}>
                    <div className={classes.textBox}>
                        <p className={classes.O1}>
                            02
                        </p>
                        <div className={classes.Histroy}>
                            <p className={classes.historyText}>CLIMB</p>
                            <p className={classes.square}></p>
                        </div>
                    </div>

                    <div className={classes.sectionTwoText}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla, nunc in iaculis venenatis, 
                    felis urna scelerisque enim, ac facilisis nisi libero nec mi. Cras sollicitudin eleifend urna, in  
                       
                    </p>
                    </div>

                </div>

             </div>
 }

export default SectionThree;
