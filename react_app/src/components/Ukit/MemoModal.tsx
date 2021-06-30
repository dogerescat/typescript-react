import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 500,
      minHeight: 500
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

interface Props {
    title: string;
    content: string;
    isOpen: boolean;
    handleClose: () => void;
}

const MemoModal = (props: Props) => {
  const classes = useStyles();
//   const [open, setOpen] = useState(false);
// //   const handleOpen = () => {
// //     setOpen(true);
// //   };

//   const handleClose = () => {
//     setOpen(false);
//   };

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
          timeout: 500,
        }}
      >
        <Fade in={props.isOpen}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>{props.title}</h2>
            <p id='transition-modal-description'>
              {props.content}
            </p>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default MemoModal;
