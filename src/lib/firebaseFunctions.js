<<<<<<< HEAD
// LINKS CONFIGURACIÓN
export { app, db } from './config';

// Link firebase
export {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
}
  // eslint-disable-next-line import/no-unresolved
  from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

// Link firestore
export {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
=======
/* eslint-disable import/no-unresolved */
// Functions Firestore
export {
  collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, getDoc, orderBy, query,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
// Functions  Authentication
export {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';
// Functions Initialization
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';
export { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js';
>>>>>>> 4dc804f74e67a73616b1dd22ddac14736da911db
