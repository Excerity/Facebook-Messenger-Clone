import firebase from 'firebase';

    const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBTrMS-qcLedZHn3FZ4lugkDn7da0lid3w",
        authDomain: "facebook-messenger-clone-797ec.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-797ec.firebaseio.com",
        projectId: "facebook-messenger-clone-797ec",
        storageBucket: "facebook-messenger-clone-797ec.appspot.com",
        messagingSenderId: "399008469111",
        appId: "1:399008469111:web:1277069bc6367dd21cb672",
        measurementId: "G-NMDVVZSXRR"
})

const db = firebaseApp.firestore()

export default db; 