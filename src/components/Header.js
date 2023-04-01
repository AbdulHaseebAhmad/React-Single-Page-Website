import React from "react";
import classes from "../CSS/Header.module.css";
import Logo from "../ImagesForCoalition/logoOne.png";

const Header = (props) =>{
     

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

        
    return  <div className={classes.nav}>

            <div className={classes.logoHolder}>
                <img src={Logo} alt="logo"/>
            </div>

            <div className={classes.linkHolder}>
                <a href="" onClick={historyClickHandler} >01. History</a>
                <a href="" onClick={teamClickHandler} >02. Team</a>
            </div>
        </div>
     
 

} 

export default Header;