import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYJ5T1fu_nY_OzFDyHvbrmU67I0NzNCzI",
  authDomain: "zerocancerafrica.firebaseapp.com",
  projectId: "zerocancerafrica",
  storageBucket: "zerocancerafrica.appspot.com",
  messagingSenderId: "503796621829",
  appId: "1:503796621829:web:a2a4a5ee13bff39e94f26c"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, collection, getDocs}
