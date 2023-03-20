//useFetch.js
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../config/FirebaseConfig';
import { getFirestore, getDocs } from "firebase/firestore";


export default function useFirestoreGet(collection_name) {
    const [data, setData] = useState(null);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    async function FirebaseQuery(query){
        const queryCol = collection(db, query);
        const querySnapshot = await getDocs(queryCol);
        const query_data = querySnapshot.docs.map(doc => doc.data());
        setData(query_data);
        console.log('inside fetch categories', data)
        // Data = [...query_data]
    }
    useEffect(()=>{
        FirebaseQuery(collection_name);
        // return
    }, [])
    

    return [data];
}
