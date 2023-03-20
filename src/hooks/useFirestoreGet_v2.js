//useFetch.js
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../config/FirebaseConfig';
import { getFirestore, getDocs } from "firebase/firestore";


export default function useFirestoreGet_v2(collection_name) {
    const [data, setData] = useState(null);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const fetchPost = async () => {
        await getDocs(collection(db, collection_name))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setData(newData);                
                console.log('new data from inside hook', newData);
            })
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])
    

    return [data];
}
