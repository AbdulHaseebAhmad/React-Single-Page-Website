import React, {useRef, useState} from "react";
import HeaderTwo from "./HeaderTwo";
import Container from "../UI/ContinerTwo";
import classes from "../CSS/SectionTwo.module.css";
import OOne from "../ImagesForCoalition/01.png";
import imgOne from "../ImagesForCoalition/carousel-image1.png";
import imgTwo from "../ImagesForCoalition/carousel-image2.png";
import imgThree from "../ImagesForCoalition/sectionThreeBg.png";
import imgFour from "../ImagesForCoalition/sectionTwoBg.png";
import Card from "../UI/Card";


    const imagesURl = [
         {id:0,url:imgOne},
         {id:1,url:imgFour},
         {id:2,url:imgTwo},
         {id:3,url:imgThree},
         
    ]

const SectionTwo = (props) => { 

    const [sliderData, setSliderData] = useState(imagesURl[1]);
    
    const [saveRefference, setSaveRefference] = useState();
    
    const recieveRefOfContainer = (data) => {
        setSaveRefference(data);
        props.forwardRefference(saveRefference)
        
    }

    const handleClick =(index)=>{
        const slider = imagesURl[index]
        setSliderData(slider);
    }
    


    return <Container refOfContainer={recieveRefOfContainer} style={{backgroundImage:`url(${sliderData.url})`}}>
            <HeaderTwo historyRef={props.historyRef}  teamRef={props.teamRef}/>

            <div className={classes.sectionTwo}>

                <div className={classes.sectionTwoTop}>

                    <div className={classes.textBox}>
                        <p className={classes.O1}>
                            01
                        </p>
                        <div className={classes.Histroy}>
                            <p className={classes.historyText}>HISTORY</p>
                            <p className={classes.square}></p>
                        </div>
                    </div>

                    <div className={classes.sectionTwoText}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla, nunc in iaculis venenatis, 
                    felis urna scelerisque enim, ac facilisis nisi libero nec mi. Cras sollicitudin eleifend urna, in mollis ante pharetra sed.
                     Fusce est urna, luctus nec scelerisque quis, euismod at nibh. Nam egestas imperdiet massa, 
                    </p>
                    </div>

                </div>

                <div className={classes.sectionTwoBottom}>
                   {imagesURl.map((eachURL,i) => {
                        return <Card url={eachURL.url} onClick={()=>handleClick(i)} key={eachURL.id}/>
                   })   }
                </div>
             </div>

            </Container>
}

export default SectionTwo;