import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyByyod37Q4sZR3JmnOmYpLR1u4cRdb9gFI",
    authDomain: "todoist-tut-fcd00.firebaseapp.com",
    databaseURL: "https://todoist-tut-fcd00.firebaseio.com",
    projectId: "todoist-tut-fcd00",
    storageBucket: "todoist-tut-fcd00.appspot.com",
    messagingSenderId: "515726339990",
    appId: "1:515726339990:web:ccec4c9eb26ce92c"
});

export { firebaseConfig as firebase }