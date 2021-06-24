import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  content: {
    boxShadow: '0 3px 5px 2px rgba(10, 10, 10, 0.5)',
    width: 300,
    border: 0,
    margin: '30px'
  },
});
const ContentInput = () => {
  const classes = useStyles();
  return (
    <>
      <TextareaAutosize rowsMin={10} className={classes.content} />
    </>
  );
};

export default ContentInput;
