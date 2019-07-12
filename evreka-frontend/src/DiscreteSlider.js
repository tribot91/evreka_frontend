import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
    },
    margin: {
        height: theme.spacing(3),
    },
}));


export default function DiscreteSlider(props) {
    const handleChange = (event, newValue) => { props.handleSliderChange(newValue) }

    if (props.play) {
        setTimeout(() => {
            props.handleFrameChange((props.selectedFrame + 1) % props.marks.length);
        }, 1000);
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Slider
                onChange={handleChange}
                defaultValue={props.marks[0].value}
                step={null}
                min={props.marks[0].value}
                max={props.marks[props.marks.length - 1].value}
                marks={props.marks}
                value={props.marks[props.selectedFrame].value}
            />
            <div className={classes.margin} />
        </div>
    );
}