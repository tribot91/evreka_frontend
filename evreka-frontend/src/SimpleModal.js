import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        height: '90vh',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
    },
}));

export default function SimpleModal({ vehicle, name, driver }) {
    let availableVehicles = ['4.5. Etap', 'Bahçeşehir', 'Başakşehir', 'Bşk.&Ağa.', 'Kayaşehir']

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <MenuItem onClick={handleOpen} style={{ fontWeight: 600 }}>Change</MenuItem>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h4 id="modal-title">{vehicle} - {name} - {driver}</h4>
                    <div style={{ background: '#E9ECF5', padding: '10px' }}>
                        <h4 style={{ margin: 0 }}>Change Vehicle</h4>

                        <div style={{}}>
                            {availableVehicles.map((vehicle, index) => {
                                return <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0', fontSize: '14px' }}>
                                    <div>
                                        {vehicle}
                                    </div>
                                    <div style={{ background: 'dimgray', padding: '2px 5px', borderRadius: '2px' }}>
                                        <FontAwesomeIcon size="xs" color='white' icon={faExchangeAlt} />
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}