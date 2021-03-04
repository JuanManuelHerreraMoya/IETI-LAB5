import React from 'react';


import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {Button} from "reactstrap";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';


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

export default function Register() {


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

    const classes = useStyles();

    return (
        <div >
            <Fab variant="extended" onClick={handleClickOpen}>
                <NavigationIcon className={classes.extendedIcon} />
                Register
            </Fab>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >

                <div id="Registerform">
                    <div  align="center" >
                        <FormHeader  title="Register"/>
                    </div>

                    <div>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth class="row input">
                                <label >Full Name</label>
                                <Input
                                    id="name"
                                    name="name"
                                    autoFocus
                                />
                            </FormControl>
                            <br/>
                            <FormControl margin="normal" required fullWidth class="row input">
                                <label >Email: </label>
                                <Input
                                    type="mail"
                                    name="email"
                                    id="email"
                                />
                            </FormControl>
                            <br/>
                            <FormControl  margin="normal" required fullWidth  >
                                <label >Password: </label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </FormControl>
                            <FormControl  margin="normal" required fullWidth  >
                            <label >Confirm Password: </label>
                            <Input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                            />
                        </FormControl>
                            <FormControl margin="normal" required fullWidth >
                                {/*<Date/>*/}
                            </FormControl>
                            <FormControl margin="normal" required fullWidth class="row">
                                <Button aling="cemter" outline color="success" onClick={handleClose}>
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