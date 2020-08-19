const firebaseConfig = {
  apiKey: "AIzaSyCltHMtKaMJmSste1DfdLQ5hQwzPRLR4IU",
  authDomain: "whatsapp-clone-a2b6a.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-a2b6a.firebaseio.com",
  projectId: "whatsapp-clone-a2b6a",
  storageBucket: "whatsapp-clone-a2b6a.appspot.com",
  messagingSenderId: "488900795384",
  appId: "1:488900795384:web:005a353944ff083bfb140d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;