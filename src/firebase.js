import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAtcGho7okuWR5I43DiCtvn1zcg1U921_Y',
  authDomain: 'slack-clone-7ee34.firebaseapp.com',
  databaseURL: 'https://slack-clone-7ee34.firebaseio.com',
  projectId: 'slack-clone-7ee34',
  storageBucket: 'slack-clone-7ee34.appspot.com',
  messagingSenderId: '716589101745',
  appId: '1:716589101745:web:5deb0f57fb18a70e9d6890',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
// import {auth} from "./firebase.js"

export default db
// import db from "./firebase.js"
