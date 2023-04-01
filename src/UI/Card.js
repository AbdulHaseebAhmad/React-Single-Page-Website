import React from "react";
import classes from "../CSS/Card.module.css";

const Card = (props) => {
    return <div className={classes.container}>
        <img src={props.url} alt="carousel-image" className={classes.image} onClick={props.onClick}/>
    </div>
}
export default Card;