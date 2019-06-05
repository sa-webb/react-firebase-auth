import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './protected';
import Pricing from '../components/Pricing';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import User from '../components/User';


class Navigation extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route authenticated={this.props.authenticated} path="/login" component={SignIn} />
                    <Route path="/register" component={SignUp} />
                    <Route path="/user" component={User} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/pricing" component={Pricing} />
                    </Switch>
            </Router>
        );
    }
}

export default Navigation;