import React, {useEffect, useState} from "react";
import Container from "../UI/Continer";
import Header from "./Header";
import classes from "../CSS/Hero.module.css";
import sectionOneText from "../ImagesForCoalition/sectionOneText.png";

const Hero= (props) =>{

    const recieveTopRef = (data) => {
        props.forwardRefference(data)
    }
    


    return  <Container topRef={recieveTopRef}>
            <Header historyRef={props.historyRef} teamRef={props.teamRef}/>
            <div className={classes.sectionOne}>
            <span>LOSANGELES</span> 
            <span>MOUNTAINS</span>
             </div>
            </Container>
        
     
}

export default Hero;