import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

interface Props {
    label: string;
    onClick: () => void;
}

const useStyles = makeStyles({
        "button": {
            backgroundColor: '#def7ff',
            color: '#000',
            fontSize: 16,
            height: 48,
            marginButton: 16,
            width: 150
        }
});

const PrimaryButton = (props: Props) => {
    const classes = useStyles();
    return (
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
    )
}

export default PrimaryButton;