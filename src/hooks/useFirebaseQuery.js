import { data } from 'autoprefixer';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export const firebaseConfig = {
    apiKey: "AIzaSyBT4bKBXnPzq5BzJQAtAbAfQYWcXKk5ziw",
    authDomain: "e-commerce-project-797ff.firebaseapp.com",
    projectId: "e-commerce-project-797ff",
    storageBucket: "e-commerce-project-797ff.appspot.com",
    messagingSenderId: "786618161724",
    appId: "1:786618161724:web:da4d899093990d7c68c139",
    measurementId: "G-570JJ5E5M9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// first try
// export default async function useFirebaseQuery(query){
//     const queryCol = collection(db, query);
//     const querySnapshot = await getDocs(queryCol);
//     const query_data = querySnapshot.docs.map(doc => doc.data());
//     return query_data
// }


// second try
// export default function useFirebaseQuery(query){
//     const queryCol = collection(db, query);
//     getDocs(queryCol).then((snapshot) =>{
//         let data = []
//         snapshot.docs.forEach((doc) => {
//             data.push({...doc.data(), id: doc.id})
//         })
//         return data
//     })
// }
// 

// third try
// export default async function useFirebaseQuery(query){
//     const queryCol = collection(db, query);
//     // const querySnapshot = await getDocs(queryCol);
//     // const query_data = querySnapshot.docs.map(doc => doc.data());
//     // return query_data

//     await getDocs(collection(db, query))
//         .then((querySnapshot)=>{               
//             const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
//             return newData;                
//             // console.log(todos, newData);
//         })
// }


// fourth try
// export default async function useFirebaseQuery (query){
//     await getDocs(collection(db, query))
//         .then((querySnapshot)=>{               
//             const newData = querySnapshot.docs
//                 .map((doc) => ({...doc.data(), id:doc.id }));
//             // setTodos(newData);                
//             // console.log(newData);
//             return newData
//         })
// }