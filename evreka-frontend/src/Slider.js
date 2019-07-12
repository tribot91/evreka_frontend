import React from 'react';
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

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 40,
        label: '40°C',
    },
    {
        value: 60,
        label: '60°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

function valuetext(value) {
    return `${value}°C`;
}

function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
}

export default function DiscreteSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                marks
                min={0}
                max={10}
                valueLabelDisplay="auto"
            />
            <div className={classes.margin} />

        </div>
    );
}