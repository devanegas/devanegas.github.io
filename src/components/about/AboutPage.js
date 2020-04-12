import React from 'react';
import Title from '../Title';
import MyResume from "./MyResume";
import aboutImage from "../../images/aboutImage.jpeg"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    pdfViewer:{
        margin: 100,
        width: "50%"
    }
  });
const AboutPage = props =>{
    const classes = useStyles();
    return(
        <React.Fragment>
            <Title title={"ABOUT"} image={aboutImage}/>
            <div className={classes.pdfViewer}>
                <MyResume />
            </div>
        </React.Fragment>
    )
}

export default AboutPage;