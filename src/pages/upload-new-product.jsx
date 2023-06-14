import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../config/FirebaseConfig';
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import Navbar from '@layouts/Navbar';


export default function UploadNewProduct() {

  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCat, setProductCat] = useState('');
  const [productDesc, setProductDesc] = useState('');
  // var Data =[];

  
  
  // FirebaseQuery('products');
  useEffect(()=>{
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        async function FirebaseQuery(query){
            const queryCol = collection(db, query);
            const querySnapshot = await getDocs(queryCol);
            const query_data = querySnapshot.docs.map(doc => doc.data());
            setCategories(query_data);
            // Data = [...query_data]
            console.log('inside fetch', categories)
        }
        FirebaseQuery('categories');
    }, [])



//   console.log('datax', categories[0].cat_name)

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    setProductName(value);
  };
  const handleProductPriceChange = (e) => {
    const value = e.target.value;
    setProductPrice(value);
  };
//   const handleProductCatChange = (e) => {
//     const value = e.target.value;
//     setProductDesc(value);
//     console.log(categories)
//   };
  const handleProductDescChange = (e) => {
    const value = e.target.value;
    setProductDesc(value);
  };


  const handleSubmit = async (e) => {
      e.preventDefault();
      
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        try {
            await addDoc(collection(db, 'products'), {
                name: productName,
                price: productPrice,
                description: productDesc
            });

            console.log('Product added successfully!');
            setProductName('');
            setProductPrice('');
            setProductDesc('');
        } catch (error) {
            console.error('Error adding product: ', error);
        }
    };
//   (e) => {
//     e.preventDefault();


    // db.collection('products')
    //   .add({
    //     name: productName,
    //     cost: productPrice,
    //     description: productDesc
    //   })
    //   .then(() => {
    //     console.log('Product added successfully!');
    //     setProductName('');
    //     setProductPrice('');
    //   })
    //   .catch((error) => {
    //     console.error('Error adding product: ', error);
    //   });
    

  return (
    <>
        <Navbar/>
        <div className='w-3/5 mx-auto mt-10'>
            <div className='text-4xl text-center'>Upload New Product</div>
            
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="product-name" className="block mb-2 text-sm font-medium text-gray-900 xdark:text-white">Product Name</label>
                        <input type="text" id="product-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" required value={productName} onChange={handleProductNameChange}/>
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 xdark:text-white">Product Price</label>
                        <input type="number" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10,000" required value={productPrice} onChange={handleProductPriceChange}/>
                    </div>
                    <div className=''>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 xdark:text-white">Product Category</label>
                        <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={productCat}>
                            {/* <option value="default_value" disabled selected>Select a  Product Cartegory</option> */}
                            {categories.length === 0 ? (
                                <option >Loading categories...</option> // or any loading indicator
                                ) : (
                                    categories.map((category)=>(
                                        <option value={category.cat_name}>{category.cat_name}</option>
                                    ))
                                //    (categories.length !== 0)? (categories.map((category)=>(<option value={category.cat_name}>{category.cat_name}</option>))): ""
                            )} 
                        </select>
                    </div>  
                    <div>
                        <label htmlFor="product_image" className="block mb-2 text-sm font-medium text-gray-900 xdark:text-white">Product Image</label>
                        <input type="file" id="product_image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={productPrice} onChange={handleProductPriceChange}/>
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 xdark:text-white">Product Description</label>
                        <textarea type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro placeat necessitatibus tempore, modi expedita, corporis laborum possimus distinctio qui sapiente aliquam ut numquam optio? Illo odit minima natus nulla!" required rows='6' value={productDesc} onChange={handleProductDescChange}/>
                    </div>  
                    
                    {/* <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    </div>
                    <div>
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
                        <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique visitors (per month)</label>
                        <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                    </div> */}
                </div>
                {/* <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                </div> 
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                </div> 
                <div className="mb-6">
                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                    <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
                </div>  */}
                {/* <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                </div> */}
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload Products</button>
            </form>

        </div>
        
    </>
  );
}