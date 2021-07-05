import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../types/redux/user';
// import { MemoState } from '../types/redux/memo';
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
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: 500,
      height: 500
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
            <Grid container xl={12} justify='center' spacing={5}>
              {memoList.map((value, index) => (
                <Grid key={index} item>
                  <FolderElement title={value.title} content={value.content} index={index} />
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
