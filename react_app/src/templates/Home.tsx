import React from 'react';
import { FolderElement } from '../components/Ukit';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12}>
          <Grid container justify='center' spacing={5}>
            {[0, 1, 2, 4, 5, 6, 7, 8].map((value) => (
              <Grid key={value} item>
                <FolderElement />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
