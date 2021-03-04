import React, {Component} from 'react';
import './App.css';
import {Login} from "./components/Login.js";


import ResponsiveDrawer from './MyDrawer';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {NewTask} from "./NewTask";




class App extends Component{
    constructor(props) {
        super(props);
        localStorage.setItem('email',"juanmanuelherreramoya@gmail.com");
        localStorage.setItem('password',"123");

    }
	

    render(){
        return (
            <Router>
                <switch>
                    <Route>
                        <div className="App">
                            <div>
                                {localStorage.getItem('isLoggedIn')==="true"?
                                    <ResponsiveDrawer/>:<Login/>}

                            </div>
                        </div>
                    </Route>

                </switch>
            </Router>

        );
  }

}

export default App;