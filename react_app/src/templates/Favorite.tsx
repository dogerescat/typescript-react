import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/users/types';
import { FolderElement, MemoModal } from '../components/Ukit';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  readData,
  deleteData,
  switchMemoFavorite,
} from '../redux/memos/operations';
import { getMemoList } from '../redux/memos/selectors';
import { getUserId } from '../redux/users/selectors';
import { storage } from '../firebase/index';

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
      height: 500,
    },
  })
);

const Favorite = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state: State) => state);
  const memoList = getMemoList(selector);
  const userId = getUserId(selector);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [memos, setMemos] = useState(memoList);
  const [imageUrl, setImageUrl] = useState('');

  const deleteMemo = (uid: string, index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
    dispatch(deleteData(uid, index));
  };

  const switchFavorite = (index: number) => {
    const uid = memoList[index].uid;
    memoList[index].isFavorite = !memoList[index].isFavorite;
    dispatch(switchMemoFavorite(uid, memoList[index].isFavorite));
  };

  const handleOpen = (title: string, content: string, imageId: string) => {
    setTitle(title);
    setContent(content);
    if(imageId) {
      const storageRf = storage.ref('images/' + userId).child(imageId);
      storageRf
        .getDownloadURL()
        .then((url) => {
          setImageUrl(url);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(readData());
  }, [dispatch]);

  useEffect(() => {
    setMemos(memoList);
  }, [memoList]);
  return (
    <>
      <div className='folder'>
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12}>
            <Grid container xl={12} justify='center' spacing={5}>
              {memos.map((value, index) => {
                if (value.isFavorite) {
                  return (
                    <Grid key={value.uid} item>
                      <FolderElement
                        title={value.title}
                        content={value.content}
                        uid={value.uid}
                        handleOpen={() =>
                          handleOpen(value.title, value.content, value.imageId)
                        }
                        deleteMemo={() => deleteMemo(value.uid, index)}
                        index={index}
                        isFavorite={value.isFavorite}
                        switchFavorite={() => switchFavorite(index)}
                      />
                    </Grid>
                  );
                }
                return <p key={value.uid}></p>;
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <MemoModal
        title={title}
        content={content}
        isOpen={open}
        handleClose={() => handleClose()}
        imageUrl={imageUrl}
      />
    </>
  );
};

export default Favorite;
