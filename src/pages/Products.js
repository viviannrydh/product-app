import React,{useState, useEffect} from 'react';

const Products = () => {
   const [products, setProducts]=useState('');

    useEffect(()=>{
       fetchData();
    },[])

    const fetchData=async()=>{
            const response=await fetch('http://localhost:5000/products');
            const data=await response.json();
            setProducts(data);
            console.log(data);
        }

    return (
        <div>
            

        </div>
    )
}

export default Products
