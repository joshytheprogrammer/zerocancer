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

// const data = {
//   states: [
//     { id: 'lagos', name: 'Lagos', regions: ["surulere", "vic_island"] },
//     // { id: 'lagos', name: 'Lagos', regions: ["surulere", "ago"] },
//     { id: 'abuja', name: 'Abuja', regions: ["kubwa"] },
//     { id: 'enugu', name: 'Enugu', regions: ["ogui"] },
//   ],
//   regions: [
//     { id: 'surulere', name: ' Surulere', centres: ['centre1'] },
//     { id: 'vic_island', name: ' Victoria Island', centres: ['tbagc'] },
//     // { id: 'ago', name: ' Ago', centres: ['centre4'] },
//     { id: 'kubwa', name: 'Kubwa', centres: ['centre2'] },
//     { id: 'ogui', name: 'Ogui', centres: ['centre3'] },
    
//   ],
//   centres: [
//     { 
//       id: 'centre1', 
//       name: 'The Female Doc', 
//       managerName: 'Dr. Ayodele Akenzua', 
//       services: 'Screening + Diagnosis and Treatment',
//       mapsLink: 'https://is.gd/8HKDW7', 
//       address: 'No 11 Gbajumo Close, off Adeniran Ogunsanya Street, Surulere, Lagos, Nigeria.', 
//       phone:'+234 806 261 6951', 
//       formlink: 'https://forms.gle/eCLRi6mHxXei9Nwm9'
//     },
//     { 
//       id: 'centre2', 
//       name: 'Xabat Clinic Ltd', 
//       managerName: 'Dr. Christian Omale Musa',  
//       services: 'Screening + Diagnosis and Treatment',
//       mapsLink: 'https://maps.app.goo.gl/Nu6sSmAp7hNRTxQj6', 
//       address: 'Suite B7 Goshen Plaza, Kubwa Abuja.', 
//       phone: '08039559525', 
//       formlink: 'https://forms.gle/2heiXGNFPSUeaRDN6' 
//     },
//     { 
//       id: 'centre3', 
//       name: 'Nufan Diagnostic services', 
//       managerName: 'Okoye Emmanuel Chibuzo',  
//       services: 'Screening only',
//       mapsLink: 'https://goo.gl/maps/5MijcNRdNTo3diJd7', 
//       address: 'No 14 Oba Street Ogui Enugu, Nigeria', 
//       phone: '08137272674, 08037411702', 
//       formlink: 'https://forms.gle/pPitAobC3ucFCk657'
//     },
    
//     { 
//       id: 'tbagc', 
//       name: 'The Breast and Gynae Center', 
//       managerName: 'Dr Seyi Afolabi',  
//       services: 'Screening + Diagnosis and Treatment',
//       mapsLink: 'https://maps.app.goo.gl/X7L57nxBCJMEXaNy7', 
//       address: '276A Kofo Abayomi Street, Victoria Island Lagos', 
//       phone: '08120494763, 08021193912, 07033874397', 
//       formlink: 'https://forms.gle/hcq17249PCaCxdeB6'
//     },
//     // { 
//     //   id: 'centre4', 
//     //   name: 'Test Pharmacy', 
//     //   managerName: 'joshytheprogrammer',  
//     //   services: 'Buy Self Sampling Device',
//     //   mapsLink: 'https://goo.gl/maps/5MijcNRdNTo3diJd7', 
//     //   address: 'No 14 Oba Street Ogui Enugu, Nigeria', 
//     //   phone: '08137272674, 08037411702', 
//     //   formlink: 'https://forms.gle/pPitAobC3ucFCk657'
//     // },
    
//   ],
// };