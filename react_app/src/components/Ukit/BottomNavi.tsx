import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import CreateIcon from '@material-ui/icons/Create';

const BottomNavi = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('recents');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    switch (newValue) {
      case 'create':
        dispatch(push('/create'));
        break;
      case 'folder':
        dispatch(push('/home'));
    }
  };
  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label='Recents'
        value='recents'
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label='Favorites'
        value='favorites'
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label='create'
        value='create'
        icon={<CreateIcon />}
      />
      <BottomNavigationAction
        label='Folder'
        value='folder'
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNavi;
