import React from "react";
import { useState } from "react";
import classes from "../CSS/SectionFour.module.css";

const SectionFour = (props) => {

    const [activeMountainOne , setActiveMountaineOne] = useState(false);
    const [activeMountainTwo , setActiveMountainTwo] = useState(false);

    const toTopClickHandler = () => {
        window.scrollTo({
            top:props.topRef.current.offsetTop,
            behavior:"smooth",
        })
    }

    const clickHandler = (event) => {
        event.preventDefault();
        setActiveMountainTwo(false);
        setActiveMountaineOne(prevVal => !prevVal);
    }

    const clickHandlerTwo = (event) => {
        event.preventDefault();
        setActiveMountaineOne(false);
        setActiveMountainTwo(prevVal => !prevVal);
    }



    return<div className={classes.sectionFour}>
            <div className={classes.linkHolder}>
                <a href="" className={activeMountainOne? classes.active:''} onClick={clickHandler}>MOUNTAIN 1</a>
                <a href="" className={activeMountainTwo? classes.active:''} onClick={clickHandlerTwo} >MOUNTAIN 2</a>
            </div>

            <button className={classes.topButton} onClick={toTopClickHandler}>&#8593;&uarr;&#x2191;</button>
        </div>
 }

export default SectionFour;