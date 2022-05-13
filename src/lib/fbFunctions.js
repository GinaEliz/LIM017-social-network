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
