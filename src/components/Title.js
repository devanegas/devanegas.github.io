import React from 'react';
import { makeStyles } from '@material-ui/core';
import "../title.css";

const useStyles = makeStyles({
});

const Title = props =>{
    const classes = useStyles(props.image);
    let styles={
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 50,
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url(${props.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginBottom: 50
    }
    return(
        <React.Fragment>
            <div style={styles}>
                <div className={'customTitle'}>
                    {props.title}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Title;