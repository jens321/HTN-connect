import * as firebase from 'firebase';

import { FirebaseConfig } from '../config/keys';
firebase.initializeApp(FirebaseConfig);

firebase.database().ref('users').on('value', (event) => {
  console.log(event.val());
})

export { firebase }; 
