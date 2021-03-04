import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import {Button} from "reactstrap";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const countries = [
        { name: 'Ready' },
        { name: 'In progress' },
        { name: 'Done ' },
    ];
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 align="center" id="simple-modal-title">Task Filter</h2>
            <div>
                <form className="form">
                    <FormControl margin="normal" required fullWidth class="row input">
                        <label >Responsible</label>
                        <Input
                            id="Responsible"
                            name="Responsible"
                            autoFocus
                        />
                    </FormControl>

                    <FormControl margin="normal" required fullWidth class="row input">
                        <label >Due Date </label>
                        <Input
                            id="date"
                            name="date"
                            autoFocus
                        />
                    </FormControl>

                    <br/>
                    <FormControl  margin="normal" required fullWidth  >
                        <Autocomplete
                            options={countries}
                            getOptionLabel={option => option.name}
                            renderInput={params =>
                                <TextField
                                    label="Status"
                                    name="status"
                                    variant="outlined"
                                    required

                                    {...params}
                                />
                            }
                        />
                    </FormControl>
                </form>
                <div align="center">
                    <button type="submit" autoFocus >
                        Apply
                    </button>
                </div>
                <br/>
                <div align="center">
                    <button type="submit" autoFocus>
                        Clear All
                    </button>
                </div>

            </div>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Filtro
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}