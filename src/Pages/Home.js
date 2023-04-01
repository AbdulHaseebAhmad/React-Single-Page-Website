import React, {useRef, useState} from "react";
import Hero from "../components/Hero";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import SectionSix from "../components/SectionSix";
import classes from "../CSS/Home.module.css"

const Home = (props) => {

   const [historyRef, setHistoryRef] = useState(null)
   const [teamRef, setTeamRef] = useState(null)
   const [topRef, setTopRef] = useState(null)

   
const getRefferenceHistory = (data) => {
    setHistoryRef(data);
   
}

const getRefferenceTeam = (data) => {
    setTeamRef(data);
}

const getRefferenceTop = (data) => {
    setTopRef(data);
}
    
     
    return <div className={classes.cont}>
        <Hero historyRef={historyRef} teamRef={teamRef} forwardRefference={getRefferenceTop}/>
        <SectionTwo forwardRefference={getRefferenceHistory} historyRef={historyRef} teamRef={teamRef}/>
        <SectionThree forwardRefference={getRefferenceTeam} />
        <SectionFour topRef={topRef}/>
        <SectionFive/>
        <SectionSix/>
     </div>
}

export default Home;