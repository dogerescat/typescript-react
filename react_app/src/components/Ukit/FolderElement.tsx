import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MemoModal } from '.';
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
}

const FolderElement = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <>
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
        <CardActions>
          <Button onClick={() => { handleOpen() }} size='small'>OPEN</Button>
        </CardActions>
      </Card>
      <MemoModal title={props.title} content={props.content} isOpen={open} handleClose={() => {handleClose()}}/>
    </>
  );
};

export default FolderElement;
