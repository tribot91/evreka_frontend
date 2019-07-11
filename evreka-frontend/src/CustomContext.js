import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from './SimpleModal';

export default function CustomContext({ vehicle, name, driver }) {
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
                <Modal vehicle={vehicle} name={name} driver={driver}></Modal>
                <MenuItem onClick={handleClose}>Swap</MenuItem>
            </Menu>
        </div>
    );
}
