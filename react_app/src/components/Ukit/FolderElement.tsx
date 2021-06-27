import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: 150,
      width: 200,
    },
  }),
);


const FolderElement = () => {
  const classes = useStyles();
  return ( 
    <Paper className={classes.paper} />
  );
};

export default FolderElement;
