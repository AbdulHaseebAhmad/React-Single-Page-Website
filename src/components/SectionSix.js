import ContainerFour from "../UI/ContinerFour";
import classes from "../CSS/Container.module.css";
import Logo from "../ImagesForCoalition/logoOne.png";
import LogoTwo from "../ImagesForCoalition/cv.png";


const SectionSix = () => {
    return <ContainerFour>
        <div className={classes.nav}>

            <div className={classes.logoHolder}>
                <img src={Logo} alt="logo"/>
                <img src={LogoTwo} alt="logo"/>
            </div>

            <p className={classes.linkHolder}>
                 COPYRIGHT 2016. ALL RIGHTS RESERVED
            </p>
        </div>
        </ContainerFour>
}

export default SectionSix;