import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#010048",

      ["@media (width:375px)"]: {
        marginTop: "5%",
        alignSelf: "center !important",
      },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: "#010048 !important",
      boxShadow: "none",
    },
    p: {
      color: "#fff",

      ["@media (width:375px)"]: {
        display: "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
      ["@media (max-width:500px)"]: {
        display: "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
    logo1: {
      ["@media (width:375px)"]: {
        marginTop: "5%",
      },
    },
    centerlogo: {
      alignSelf: "center",
    },
  })
);

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <Paper className={classes.paper}>
            <p className={classes.p}>
            XNXX Images / Animated Gifs / Stories
            </p>
            <p className={classes.p}>
            We hope you enjoyed our free porn movies and pics! Think about bookmarking our site!
If you are not a mature adult or are offended by pornography please don't come back!

Have something to say? Please use our Forum, or contact us directly (warning : we can't read every email).
Advertising, Traffic Trades, Sponsors Webmasters click here. XNXX.COM Copyright 2000-2021. All rights reserved. Thanks for visiting our free sex site.
Become a porn model - Terms of service - Privacy policy - Privacy notice - Content removal
            </p>
          </Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}


