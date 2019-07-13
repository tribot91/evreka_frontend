import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleModal from './SimpleModal';

var CustomContext = ({ vehicle, name, driver, changeVehicle }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ textTransform: 'Capitalize', lineHeight: 1 }}>
                {vehicle}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <SimpleModal vehicle={vehicle} name={name} driver={driver} changeVehicle={changeVehicle} handleContextClose={() => setAnchorEl(null)}></SimpleModal>
                <MenuItem onClick={handleClose}>Swap</MenuItem>
            </Menu>
        </div>
    );
}

export default CustomContext;