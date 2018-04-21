import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyD4ZifyKAJZFworq1scieVYe9vVrJQIS1I",
  authDomain: "nbaapp-34b53.firebaseapp.com",
  databaseURL: "https://nbaapp-34b53.firebaseio.com",
  projectId: "nbaapp-34b53",
  storageBucket: "nbaapp-34b53.appspot.com",
  messagingSenderId: "1062534828036"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper
};
