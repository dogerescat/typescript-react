import firebase from "firebase/app";
import 'firebase/firestore';

export type FirebaseTs = firebase.firestore.Timestamp;
export type FirebaseRf = firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
export type FirebaseQs = firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
export type FirebaseQds = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
export type FirebaseStorageRf = firebase.storage.Reference;