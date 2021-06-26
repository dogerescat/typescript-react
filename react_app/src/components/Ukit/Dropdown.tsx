import React from "react";
import {useDispatch} from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Select } from '@material-ui/core';
import { signOut } from "../../redux/users/operator";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 100,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const Dropdown = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <nav>
          <ul className='nav_wrapper'>
            <li className='nav_item'>
              <FormControl className={classes.formControl}>
                <Select
                  labelId='demo-simple-select-helper-label'
                  id='demo-simple-select-helper'
                  displayEmpty
                >
                  <MenuItem onClick={() => dispatch(signOut())}>ログアウト</MenuItem>
                  <MenuItem>username</MenuItem>
                </Select>
              </FormControl>
            </li>
          </ul>
        </nav>
    );
}

export default Dropdown;