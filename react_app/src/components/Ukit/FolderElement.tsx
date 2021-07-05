import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { push } from 'connected-react-router';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

interface Props {
  title: string;
  content: string;
  index: number;
}

const FolderElement = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const goMemo = useCallback((id) => {
    dispatch(push('/open/'+id));
  },[]);
  return (
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography variant='body2' component='p'>
          </Typography>
        </CardContent>
          <Button onClick={() => goMemo(props.index)} size='small'>OPEN</Button>
      </Card>
  );
};

export default FolderElement;
