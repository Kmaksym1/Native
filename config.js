// // import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// // import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// // // import * as firebase from 'firebase';
// // // import firebase from 'firebase/app';



// // import { initializeApp } from 'firebase/app';
// // import { getAuth } from "firebase/auth";
// // import { getFirestore } from "firebase/firestore";
// // import { getStorage } from "firebase/storage";
// // const firebaseConfig = {
// //   apiKey: 'AIzaSyCVQSRf_vPzpDto440BtIikcx-X92CZ25Y',
// //   authDomain: 'reactnative-cc13e.firebaseapp.com',
// //   databaseURL: 'https://reactnative-cc13e-default-rtdb.firebaseio.com/',
// //   projectId: 'reactnative-cc13e',
// //   storageBucket: 'reactnative-cc13e.appspot.com',
// //   messagingSenderId: '764005059503',
// //   appId: '1:764005059503:ios:3204cc695fb83247e7bd5a',
// //   measurementId: 'G-CVM4TT7MGY',
// // };
// // const app = initializeApp(firebaseConfig);

// // export const auth = getAuth(app);
// // if (!firebase.apps.length) {
// //   firebase.initializeApp(firebaseConfig);
// // }
// // // export const auth = initializeAuth(app, {
// // //   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// // // });


// // export const db = getFirestore(app);
// // export const storage = getStorage(app);


// import { initializeApp } from "firebase/app";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// // import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// const firebaseConfig = {
//   apiKey: 'AIzaSyCVQSRf_vPzpDto440BtIikcx-X92CZ25Y',
//   authDomain: 'reactnative-cc13e.firebaseapp.com',
//   databaseURL: 'https://reactnative-cc13e-default-rtdb.firebaseio.com',
//   projectId: 'reactnative-cc13e',
//   storageBucket: 'reactnative-cc13e.appspot.com',
//   messagingSenderId: '764005059503',
//   appId: '1:764005059503:ios:3204cc695fb83247e7bd5a',
//   measurementId: "G-CVM4TT7MGY",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// export const db = getFirestore(app);
// export const storage = getStorage(app);


// import { initializeApp } from "firebase/app";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// // import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// const firebaseConfig = {
//   apiKey: 'AIzaSyCVQSRf_vPzpDto440BtIikcx-X92CZ25Y',
//   authDomain: 'reactnative-cc13e.firebaseapp.com',
//   databaseURL: 'https://reactnative-cc13e-default-rtdb.firebaseio.com',
//   projectId: 'reactnative-cc13e',
//   storageBucket: 'reactnative-cc13e.appspot.com',
//   messagingSenderId: '764005059503',
//   appId: '1:764005059503:ios:3204cc695fb83247e7bd5a',
//   // measurementId: "G-CVM4TT7MGY",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// export const db = getFirestore(app);
// export const storage = getStorage(app);

import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
   apiKey: 'AIzaSyA69CA_IkVOjjy9yG_eZIBEvsxqWgTbrZk',
  authDomain: 'native-549d2.firebaseapp.com',
  databaseURL: 'https://native-549d2-default-rtdb.firebaseio.com',
  projectId: 'native-549d2',
  storageBucket: 'native-549d2.appspot.com',
  messagingSenderId: '1058282400425',
  appId: '1:1058282400425:ios:444d0bab7b2d1db0b557b8',
  // measurementId: "G-CVM4TT7MGY",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);