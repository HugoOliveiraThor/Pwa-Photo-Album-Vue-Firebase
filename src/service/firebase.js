import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAeXhuueajbUmzsCuI6eaTn3cChSwz_5Yc',
  authDomain: 'hugochat-2dbb2.firebaseapp.com',
  databaseURL: 'https://hugochat-2dbb2.firebaseio.com',
  storageBucket: 'hugochat-2dbb2.appspot.com',
  messagingSenderId: '1075376776783',
};
firebase.initializeApp(config);

export default {
  database: firebase.database(),
};
