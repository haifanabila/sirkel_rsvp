import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyDmtgIuP3MljDOG3xKgGJwul_yZeEDLaNo",
    authDomain: "sirkel-rsvp.firebaseapp.com",
    databaseURL: "https://sirkel-rsvp.firebaseio.com",
    projectId: "sirkel-rsvp",
    storageBucket: "",
    messagingSenderId: "751206423525"
  };
  firebase.initializeApp(config);

ReactDOM.render(
	<App />, 
	document.getElementById('root')
	);
