import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth'
import Navigation from './routes/routes';

class App extends Component {
  state = { authenticated: false };

  componentDidMount() {
    console.log("top " + this.state.authenticated);
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
          ? this.setState(() => ({
            authenticated: true,
          }))
          : this.setState(() => ({
            authenticated: false,
          }));
      console.log("bottom " + this.state.authenticated);
    });
  }

  render() {
    return <Navigation authenticated={this.state.authenticated} />
  }
}

const firebaseAppAuth = firebase.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);