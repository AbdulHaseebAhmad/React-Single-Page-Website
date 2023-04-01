import React from "react";
import classes from "../CSS/HeaderTwo.module.css";
import Logo from "../ImagesForCoalition/logoOne.png";
import LogoTwo from "../ImagesForCoalition/sectionOneText.png";

const HeaderTwo = (props) =>{


    
    const historyClickHandler = (event) => {
        window.scrollTo({
            top:props.historyRef.current.offsetTop,
            behavor:"smooth",
        })  ;
    event.preventDefault();  }

    const teamClickHandler = (event) => {
        window.scrollTo({
            top:props.teamRef.current.offsetTop,
            behavor:"smooth",
        })  ;event.preventDefault();  }
        
    return <div className={classes.nav2}>

            <div className={classes.logoHolder}>
                <img src={Logo} alt="logo"/>
                <img src={LogoTwo} alt="logo"/>
            </div>

            <div className={classes.linkHolder}>
                <a href="" onClick={historyClickHandler}>01. History</a>
                <a href="" onClick={teamClickHandler} >02. Team</a>
            </div>
        </div>
     

 
} 

export default HeaderTwo;