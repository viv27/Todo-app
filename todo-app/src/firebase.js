import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_eYw0VU7DoTBM7KgOpKJijNQ_dka2jfg",
  authDomain: "todoproj-71a1f.firebaseapp.com",
  projectId: "todoproj-71a1f",
  storageBucket: "todoproj-71a1f.appspot.com",
  messagingSenderId: "434647924851",
  appId: "1:434647924851:web:9f4e99e6cc484a61356a06"
})

const db = firebaseApp.firestore()

export default db
