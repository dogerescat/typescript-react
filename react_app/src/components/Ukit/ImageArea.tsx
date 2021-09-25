import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

interface Props {
  id: string;
  path: string;
  deleteImage: (id: string) => void;
}

const ImageArea = (props: Props) => {
  return (
    <>
      <div className='preview-image'>
        <img alt='' id={props.id} src={props.path} />
        <Button onClick={() => props.deleteImage(props.id)}>
            <DeleteIcon />
        </Button>
      </div>
      <p className='preview-image-comment'>※ 画像は複数添付できません</p>
    </>
  );
};
export default ImageArea;
