import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DeveloperBoardOutlinedIcon from '@material-ui/icons/DeveloperBoardOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
  navbar: {
    display: "flex",
    width: "100%",
    backgroundColor: "#1A1A1B",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  links: {
    height: 50,
    padding: 15,
  },
  link: {
    color: "white",
    fontSize: 40,
    padding: 25,
    textDecoration: "none"
  },
});


const Navbar = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
        <div className={classes.navbar}>
          <div className={classes.links}>
              <NavLink tag={Link} className={classes.link} to="/">
                <HomeOutlinedIcon fontSize={'inherit'}/>
              </NavLink>
              <NavLink tag={Link} className={classes.link} to="/projects">
                <DeveloperBoardOutlinedIcon fontSize={'inherit'}/>
              </NavLink>
              <NavLink tag={Link} className={classes.link} to="/about">
                <InfoOutlinedIcon fontSize={'inherit'}/>
              </NavLink>
          </div>
        </div>
    </React.Fragment>
  );
};

export default Navbar;