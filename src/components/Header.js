import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  myImage: {
    backgroundImage:
      "url(https://avatars0.githubusercontent.com/u/44032360?s=460&u=ca2a96f3496f76aa153b531135152b6a8658e6b4&v=4)",
    height: 300,
    width: 300,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%"
  },
  headerContainer: {
    height: 600,
    width: "100%",
    display: "flex",
    backgroundImage:
      "linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url('https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Header = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.headerContainer}>
        <div className={classes.myImage}></div>
      </div>
    </React.Fragment>
  );
};

export default Header;
