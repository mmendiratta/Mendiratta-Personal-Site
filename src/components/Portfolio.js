import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import resumeData from "../resumeData.json";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Portfolio() {
  const classes = useStyles();
  if (resumeData) {
    var projects = resumeData.portfolio.projects.map((projects) => {
      return (
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={"images/portfolio/" + projects.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {projects.title}
            </Typography>
            <Typography color="textSecondary">
              {projects.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={projects.url}
              target="__blank"
            >
              Check it Out
            </Button>
            <Button
              size="small"
              color="primary"
              href={projects.repo}
              target="__blank"
            >
              Repo
            </Button>
          </CardActions>
        </Card>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}
