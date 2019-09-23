import * as firebase from 'firebase';

// should go in a secret file
const config = {
  apiKey: 'AIzaSyAUn27nPpQOYraBK1NYwXWjWc8k5Ls4EcY',
  authDomain: 'chatapp2-71bc6.firebaseapp.com',
  databaseURL: 'https://chatapp2-71bc6.firebaseio.com',
  projectId: 'chatapp2-71bc6',
  storageBucket: 'chatapp2-71bc6.appspot.com',
  messagingSenderId: '687972657854',
  appId: '1:687972657854:web:26328aff07e168a62e4cef',
};
firebase.initializeApp(config);

export default firebase;
