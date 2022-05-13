/* eslint-disable max-len */
import {
  getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider, signOut, collection, addDoc, onSnapshot, deleteDoc, doc, getDoc,
} from './fbFunctions';

import { app, db } from './config.js';

export const auth = getAuth(app);

// Función de registro

export const registerWithEmail = (email, password) => (
  createUserWithEmailAndPassword(auth, email, password));

// Función de verificación de email

export const sendEmailVerificationFirebase = () => (
  sendEmailVerification(auth.currentUser));

// auth del login usuario ya registrado

export const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

// auth con google
export const provider = new GoogleAuthProvider();

export const signGoogle = () => signInWithPopup(auth, provider);

// auth Log out
export const signOutFirebase = () => signOut(auth);

// firestore

export const saveTask = (description, author, createdAt) => addDoc(collection(db, 'tasks'), { description, author, createdAt });
export const onSnapshotFb = (callback) => onSnapshot(collection(db, 'tasks'), (callback));
export const deletePost = (id) => deleteDoc(doc(db, 'tasks', id));

// Obtener data de usuario
export const getCurrentUserFb = () => {
  const user = auth.currentUser.uid;
  return user;
};
// Función para editar post
export const getPostForEditFb = (id) => getDoc(doc(db, 'post', id));
