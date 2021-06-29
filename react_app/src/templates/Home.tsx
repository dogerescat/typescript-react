import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../types/redux/user';
import { FolderElement } from '../components/Ukit';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { readData } from '../redux/memos/operations';
import { getMemoList } from '../redux/memos/selectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state: State) => state);
  const memoList = getMemoList(selector);
  useEffect(() => {
    dispatch(readData());
  })
  return (
    <>
      <div className='folder'>
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12}>
            <Grid container item xs={12} justify='center' spacing={5}>
              {memoList.map((value, index) => (
                <Grid key={index} item>
                  <FolderElement title={value.title} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Home;
