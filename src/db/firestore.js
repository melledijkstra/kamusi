import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZPW-TzwSbK5A3xMTClaRHqhNl7Fr7Vno",
    authDomain: "kamusi-swahili.firebaseapp.com",
    databaseURL: "https://kamusi-swahili.firebaseio.com",
    projectId: "kamusi-swahili",
    storageBucket: "kamusi-swahili.appspot.com",
    messagingSenderId: "102666908735",
    appId: "1:102666908735:web:2dd37117edf8ec9853748a",
    measurementId: "G-CZNRD53WMZ"
};

firebase.initializeApp(firebaseConfig)

export default firebase
