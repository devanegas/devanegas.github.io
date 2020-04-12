import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectsCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";
import Title from "../Title";
import bactoId from "../../images/bactoId.png";
import unitedAngels from "../../images/unitedAngels.png";

const useStyles = makeStyles({
  projectDisplay: {
    margin: 15
  },
  card: {}
});

const ProjectsPage = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title
        title={"PROJECTS"}
        image={
          "https://images.pexels.com/photos/3803264/pexels-photo-3803264.jpeg"
        }
      />
      <div className={classes.projectDisplay}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ProjectsCard
              title={"BactoId"}
              cardImage={bactoId}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum risus id nisl aliquet, eu porta tortor cursus. Maecenas dignissim augue a libero fringilla mattis. Sed eleifend semper lacus eget aliquet. Aliquam erat volutpat. Pellentesque ac arcu nibh. Aliquam purus urna, convallis a sapien ac, condimentum semper ligula. "
              }
            />
          </Grid>
          <Grid item xs={6}>
            <ProjectsCard
              title={"United Angels Foundation"}
              cardImage={unitedAngels}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum risus id nisl aliquet, eu porta tortor cursus. Maecenas dignissim augue a libero fringilla mattis. Sed eleifend semper lacus eget aliquet. Aliquam erat volutpat. Pellentesque ac arcu nibh. Aliquam purus urna, convallis a sapien ac, condimentum semper ligula. "
              }
            />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default ProjectsPage;
