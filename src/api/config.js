import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCX-vM3JkbLC5dSBBeDQAgmmGEKU_269gY',
	authDomain: 'tcl-51-smart-shopping-list.firebaseapp.com',
	projectId: 'tcl-51-smart-shopping-list',
	storageBucket: 'tcl-51-smart-shopping-list.appspot.com',
	messagingSenderId: '970974663458',
	appId: '1:970974663458:web:c60c278055491604890b7b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
