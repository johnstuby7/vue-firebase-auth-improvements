import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBn85VVksfX3F3RWHlUgboz-jMA4LJPSvM',
  authDomain: 'vue-firebase-auth-2-f4ba9.firebaseapp.com',
  projectId: 'vue-firebase-auth-2-f4ba9',
  storageBucket: 'vue-firebase-auth-2-f4ba9.appspot.com',
  messagingSenderId: '393261665436',
  appId: '1:393261665436:web:95be32b61edf823e2ab159'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
