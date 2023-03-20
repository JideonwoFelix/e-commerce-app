import TempNav from '@layouts/TempNav'
import React from 'react'
import { collection, addDoc } from "firebase/firestore";
import {db} from '@config/FirebaseConfig';

import { useEffect } from 'react';
// import { initializeApp } from 'firebase/app';
// import {firebaseConfig} from '../config/FirebaseConfig';
// import { getFirestore, getDocs } from "firebase/firestore";
import useFirestoreGet from 'src/hooks/useFirestoreGet';
import useFirestoreGet_v2 from 'src/hooks/useFirestoreGet_v2';


export default function UploadToDB() {
    
    let ProductCategories=useFirestoreGet_v2('categories');
    useEffect(()=>{
        console.log('item', ProductCategories);
        // console.log(ProductCategories;d
    }, [ProductCategories])

  return (
    <>
        <TempNav/>
        <div>
            <form className="w-full max-w-lg m-auto shadow-sm shadow-slate-800 p-10 pt-5 mt-10" onSubmit={addProduct}>
                <div className="text-3xl font-bold mb-5">
                    Add Product
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-name">
                            Product Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border xiborder-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text" placeholder="Product" name="product_name"/>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-cost">
                            Product Cost
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="product-cost" type="number" placeholder="00.00" name='product_cost'/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-name">
                            Upload Image
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border xiborder-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-img" type="file" name="product_img"/>
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-cost">
                            Category
                        </label>
                        <select className="xappearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="product-category" name='product_category'>
                            <option value="" disabled defaultValue>Select Category</option>
                            { console.log('inside option',ProductCategories[0])}
                            {
                                ProductCategories[0] !==null? ProductCategories[0].map((e)=>{
                                    return(
                                        <option value={e.cat_name} key={e.id}>{e.cat_name}</option>
                                    )
                                }):''
                            } 
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Product Description
                    </label>
                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  placeholder="write your product description here" rows={6} name="product_description"></textarea>
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-3/4"></div>
                    <div className="md:w-1/4">
                        <input className="shadow bg-[#B89168] hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value='Add Product'/>
                    </div>
                </div>
                {/* <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            State
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                    </div>
                </div> */}
            </form>
        </div>
    </>
  )
}

   
    const addProduct = async (e) => {
        e.preventDefault();  
        // console.log(e.target)
        // console.log( e.target.product_description.value)
        try {
            const docRef = await addDoc(collection(db, "products"), {
              name: e.target.product_name.value,
              cost: e.target.product_cost.value,
              description:  e.target.product_description.value   
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }