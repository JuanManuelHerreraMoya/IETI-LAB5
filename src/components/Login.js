import React, {Component, useState} from "react";
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
//import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import "./Login.css";

export class  Login extends React.Component{

    constructor(props){
        super(props);
        this.state={email:"", password: ""};
    }

    render() {
        const LogIn = () => {
            if(localStorage.getItem('email') === this.state.email && localStorage.getItem('password') === this.state.password)
                localStorage.setItem('isLoggedIn', "true");
            window.location.href = "/HomeApp";
        }

        return (
            <div className="Login" >
                <h1>Task Planner</h1>
                <alert>Entre a Login</alert>
                <form className="form" >
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email"
                               name="email"
                               autoComplete="email"
                               autoFocus
                               value={this.state.email}
                               onChange={event => this.setState({email:event.target.value})}
                        />


                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            autoFocus
                            value={this.state.password}
                            onChange={event => this.setState({password:event.target.value})}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="submit"
                        onClick={LogIn}
                        style={{backgroundColor: "#FF5858"}}
                    >
                        Login
                    </Button>

                    <br></br>
                    <br></br>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="submit"
                        styel = "back"
                        style={{backgroundColor: "#FF5858"}}
                    >
                        Create Account
                    </Button>
                </form>
            </div>
        );
    }
}