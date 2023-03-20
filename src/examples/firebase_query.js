import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../config/FirebaseConfig';
import { getFirestore, collection, getDocs } from "firebase/firestore";


function FirebaseQueryExample() {

  const [Data, setData] = useState([]);
  // var Data =[];

  
  
  // FirebaseQuery('products');
  useEffect(()=>{
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        async function FirebaseQuery(query){
            const queryCol = collection(db, query);
            const querySnapshot = await getDocs(queryCol);
            const query_data = querySnapshot.docs.map(doc => doc.data());
            setData(query_data);
            // Data = [...query_data]
            console.log('inside fetch', Data)
        }
        FirebaseQuery('products');
      }, 
      // [Data]
    )



  console.log('datax', Data)

  return (
    <ul className="list">
        {Data.map(e=>(
            <li key={Data.indexOf(e)}>
                {e.name}
            </li>
        ))}
    </ul>
  );
}

export default FirebaseQueryExample;
