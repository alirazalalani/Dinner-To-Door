import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDl7QEkMG1V3rMB-uiAsM_EtHUjKCWVX3Q",
  authDomain: "deliveroo-a4c03.firebaseapp.com",
  projectId: "deliveroo-a4c03",
  storageBucket: "deliveroo-a4c03.appspot.com",
  messagingSenderId: "961853355450",
  appId: "1:961853355450:web:bd2c751258851e02d31983",
  measurementId: "G-YLE8HHCPSL",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// const db = app.firestore();
const auth = firebase.auth();

export { auth };
