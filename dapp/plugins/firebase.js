import firebase from "firebase";
import "firebase/firestore";
import FirebaseConfig from "../_keys/firebase.json";

export default async ({app}, inject) => {
  // if (!app.$firestore) {
  //   firebase.initializeApp(FirebaseConfig);
  //   const db = firebase.firestore();
  //
  //   inject('firestore', db);
  // }
}
