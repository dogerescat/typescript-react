import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HTMLReactParser from 'html-react-parser';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 500,
      minHeight: 650
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '0.5px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: 500,
      height: 650
    },
  })
);

const returnCodeToBr = (text: string) => {
  if(text === "") {
    return text;
  }
  let j = 0;
  while(j < text.length) {
    if(!text.match(/^[\x20-\x7e]*$/)) {
      j += 1.1;
    } else {
      j++;
    }
    if(j % 50 === 0) text = text.slice(0, j) + '\n' + text.slice(j);
  }
  return HTMLReactParser(text.replace(/\r?\n/g, '<br/>'));
}

interface Props {
    title: string;
    content: string;
    isOpen: boolean;
    imageUrl: string;
    handleClose: () => void;
}

const MemoModal = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={props.isOpen}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Fade in={props.isOpen}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>{props.title}</h2>
            <p id='transition-modal-description'>
              {returnCodeToBr(props.content)}
            </p>
            <div style= {{textAlign: 'center', marginTop: '30px'}}>
              <img src={props.imageUrl} alt="" />
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default MemoModal;
