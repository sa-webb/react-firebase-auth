import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProtectedRoute from './protected';
import Pricing from '../components/Pricing';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Home from '../components/Home';
import User from '../components/User';
import Header from '../components/Header';
import AuthedHeader from '../auth/AuthedHeader';


class Navigation extends Component {
    render() {
        return (
            <Router>
                {this.props.authenticated ? (
                    <AuthedHeader />            
                    ) : (
                    <Header />
                )}
                
                <Switch>
                    <Route authenticated={this.props.authenticated} exact path="/" component={Home} />
                    <Route authenticated={this.props.authenticated} path="/login" component={Login} />
                    <Route authenticated={this.props.authenticated} path="/register" component={Register} />
                    <Route authenticated={this.props.authenticated} path="/user" component={User} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/pricing" component={Pricing} />
                </Switch>
            </Router>
        );
    }
}

export default Navigation;