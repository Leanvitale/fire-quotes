// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBGZHIiAaBbKC3DPZ5nA84RpU9POH_uxkw",
    authDomain: "fir-functions-51f3b.firebaseapp.com",
    databaseURL: "https://fir-functions-51f3b.firebaseio.com",
    projectId: "fir-functions-51f3b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const func = firebase.functions();