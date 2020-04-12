import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    card:{
        backgroundColor: "black",
        borderColor: "gray",
        color: "white",
    },
    media:{
        height: 250,
        filter: "brightness(75%)"
    },
    title:{
        fontSize: 36,
    },
    description:{
        fontSize: 20
    }
});

const ProjectsCard = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Card variant="outlined" className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.cardImage}
          title="BactoId"
          />
          <CardContent>
          <Typography
          className={classes.title}
          >
            {props.title}
          </Typography>
          <Typography component="p" className={classes.description}>
            {props.description}
          </Typography>
        </CardContent>
    </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

export default ProjectsCard;
