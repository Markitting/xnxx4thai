import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Settings } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BEST OF
          </Typography>
          <Typography variant="h6" className={classes.title}>
            HIT
          </Typography>
          <Typography variant="h6" className={classes.title}>
            TAG
          </Typography>
          <Typography variant="h6" className={classes.title}>
            PICTURES
          </Typography>
          <Typography variant="h6" className={classes.title}>
            SEXSTORIES
          </Typography>
          <Typography variant="h6" className={classes.title}>
            FORUM
          </Typography>
          <Typography variant="h6" className={classes.title}>
            PORNSTARS
          </Typography>
          <Typography variant="h6" className={classes.title}>
            GAMES
          </Typography>
        <Settings/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
