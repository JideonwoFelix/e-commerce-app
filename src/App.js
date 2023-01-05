import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from './hooks/useFirebaseQuery';
// // import {db} from 'firebase';
// import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";


function App() {

  const [Data, setData] = useState([]);
  // var Data =[];

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
// FirebaseQuery('products');
     useEffect(()=>{
      FirebaseQuery('products');
    }, [])


  console.log('datax', Data)
  
//   export default async function useFirebaseQuery(){
//     const queryCol = collection(db, query);
//     const querySnapshot = await getDocs(queryCol);
//     const query_data = querySnapshot.docs.map(doc => doc.data());
// //    JSON.parse(query_data)
//     return query_data
//   }
// const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
 
  // const [todos, setTodos] = useState([]);
 
  //   const fetchPost = async () => {
  //     await getDocs(collection(db, "products"))
  //       .then((querySnapshot)=>{               
  //           const newData = querySnapshot.docs
  //               .map((doc) => ({...doc.data(), id:doc.id }));
  //           setTodos(newData);                
  //           console.log(todos, newData, 'lidd');
  //       })
  //   }
   
  //   useEffect(()=>{
  //       fetchPost();
  //   }, [])

  // console.log(datax_)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo bg-red-600" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
