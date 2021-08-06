import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { signOut } from '../../redux/users/operations';
import { getUserName } from '../../redux/users/selectors';
import {State} from '../../redux/users/types'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FolderIcon from '@material-ui/icons/Folder';
import CreateIcon from '@material-ui/icons/Create';  

export default function TemporaryDrawer() {
    const dispatch = useDispatch();
    const [isDrawer, setIsDrawer] = React.useState(false);
    const selector = useSelector((state: State) => state);
    const userName = getUserName(selector);
    const toggleDrawer = (open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
  
      setIsDrawer(!isDrawer);
    };
    const SubIcon = (text: string) => {
        switch(text) {
            case 'Folder':
                return (<FolderIcon/>)
            case 'Favorite':
                return (<FavoriteIcon/>)
            case 'Create':
                return (<CreateIcon/>)
            default:
                return <></>
        }
    }
    const items = [
        {id: userName, func: () => dispatch(push('/favorite'))},
        {id: 'Logout', func: () => dispatch(signOut())}
    ]
    const pages = [
        {id: 'Folder', func: () => dispatch(push('/folder'))},
        {id: 'Create', func: () => dispatch(push('/create'))},
        {id: 'Favorite', func: () => dispatch(push('/favorite'))}
    ]
    const list = () => (
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {items.map((item, index) => (
            <ListItem button key={item.id} onClick={() => {item.func()}} >
              <ListItemIcon>
                  {index % 2 === 0 ? <AccountCircleIcon /> : <ExitToAppIcon />}
              </ListItemIcon>
              <ListItemText primary={item.id} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {pages.map((page) => (
            <ListItem button key={page.id} onClick={() => {page.func()}} >
              <ListItemIcon>
                  {SubIcon(page.id)}
              </ListItemIcon>
              <ListItemText primary={page.id} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    return (
        <div className="nav_wrapper">
            <Button className="nav_item" onClick={toggleDrawer(true)}><MenuIcon fontSize="large" /></Button>
            <Drawer anchor="right" open={isDrawer} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
        </div>
    );
  }