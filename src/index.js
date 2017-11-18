import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC00UAtpgjDbiaQ47JPXkYLjDxpVBpGvW8",
    authDomain: "storage-18721.firebaseapp.com",
    databaseURL: "https://storage-18721.firebaseio.com",
    projectId: "storage-18721",
    storageBucket: "storage-18721.appspot.com",
    messagingSenderId: "377349080347"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
