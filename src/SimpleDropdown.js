import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        top: 36,
        right: 0,
        left: 0,
    },
}));

export default function ClickAway(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClick = () => {
        setOpen(prev => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                    <Button className='dropdown-button' onClick={handleClick} style={{ textTransform: 'Capitalize', width: '100%' }}>
                        {props.selectedVehicle === null ? "Select Vehicle" : `${props.selectedVehicle} selected`}
                    </Button>
                    {open ? (
                        <Paper className={classes.paper}>
                            <div className="options"
                                style={{ padding: '2px 10px' }}
                                onClick={() => {
                                    props.selectVehicle(null);
                                    handleClickAway()
                                }}>
                                Select All
                            </div>
                            {props.vehicles.map(vehicle =>
                                <div className="options"
                                    style={{ padding: '2px 10px' }}
                                    onClick={() => {
                                        props.selectVehicle(vehicle.name);
                                        handleClickAway()
                                    }}>
                                    {vehicle.name}
                                </div>)}
                        </Paper>
                    ) : null}
                </div>
            </ClickAwayListener>
        </div>
    );
}