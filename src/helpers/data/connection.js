import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from '../apiKeys';

const firebaseApp = () => {
  if (!firebase.apps.legnth) {
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
};

export default firebaseApp;
