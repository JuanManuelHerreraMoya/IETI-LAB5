import React from 'react';


import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button} from "reactstrap";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import {TextField} from "@material-ui/core";
import { Autocomplete } from '@material-ui/lab';
//import Date from './Date';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from "@material-ui/icons/Navigation";
import {makeStyles} from "@material-ui/core/styles";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function NewTask() {

    const classes = useStyles();
    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
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


    return (
        <div>
            <Fab variant="extended" onClick={handleClickOpen}>
                <NavigationIcon className={classes.extendedIcon} />
                New Task
            </Fab>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >

                <div id="newTaskform">
                    <div  align="center" >
                        <FormHeader title="New Task"/>
                    </div>

                    <div>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth class="row input">
                                <label >Descripcion</label>
                                <Input
                                    id="descrip"
                                    name="descrip"
                                    autoFocus
                                />
                            </FormControl>
                            <br/>
                            <FormControl margin="normal" required fullWidth class="row input">
                                <label >Responsable</label>
                                <Input
                                    type="Text"
                                    name="responsable"
                                    id="responsable"
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
                            <FormControl margin="normal" required fullWidth >
                                {/*<Date/>*/}
                            </FormControl>
                            <FormControl margin="normal" required fullWidth class="row">
                                <Button outline color="success" onClick={handleClose}>
                                    Guardar
                                </Button>
                            </FormControl>
                        </form>
                    </div>


                </div>


            </Dialog>
        </div>
    );
}