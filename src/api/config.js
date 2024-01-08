import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBcrT6-36uNMEM_MsFJhp_0ka7Cwx-Gag0',
	authDomain: 'tcl-51-smart-shopping-li-31ec4.firebaseapp.com',
	projectId: 'tcl-51-smart-shopping-li-31ec4',
	storageBucket: 'tcl-51-smart-shopping-li-31ec4.appspot.com',
	messagingSenderId: '32212467526',
	appId: '1:32212467526:web:aaa2ceb4eff7a3f469af47',
	measurementId: 'G-D0E0NWCE8Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
