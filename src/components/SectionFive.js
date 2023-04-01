import ContainerThree from "../UI/ContinerThree.js";
import classes from "../CSS/SectionFive.module.css";

const SectionFive = () => {
    return <ContainerThree>
        
            <div className={classes.boardContainer}>
                <div className={classes.board}>
                    <p className={classes.boardTitle}>SCHEDULE</p>
                    <table className={classes.table}>
                    <tbody>
                    <tr>
                            <td>25 Nov 2016</td>
                            <td>Vestibulum Vivera</td>
                        </tr>

                        <tr>
                            <td>28 Nov 2016</td>
                            <td>Vestibulum Vivera</td>
                        </tr>

                        <tr>
                            <td>18 Dec 2016</td>
                            <td>Vestibulum Vivera</td>
                        </tr>

                        <tr>
                            <td>7 Jan 2017</td>
                            <td>Vestibulum Vivera</td>
                        </tr>
                    </tbody>
                       
                    </table>
                </div>

            </div>  
        
        </ContainerThree>
}

export default SectionFive;