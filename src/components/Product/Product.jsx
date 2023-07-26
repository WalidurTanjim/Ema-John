import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import React from 'react';

const Product = ({product, addToCart}) => {
     const {name, img, price, seller, ratings} = product;

     return (
          <div className='product border rounded-md hover:shadow-md'>
               <div className='p-2'>
                    <div className='w-full h-[150px]'>
                         <img src={img} className='w-full h-full rounded-md' alt="Product Image" />
                    </div>

                    <div className='my-2'>
                         <p className='font-medium'>{name}</p>
                         <p className='text-sm'>Price: ${price}</p>
                         <p className='text-sm'>Manufacturer: {seller}</p>
                         <p className='text-sm'>Ratings: {ratings}</p>
                    </div>
               </div>

               <button className='font-medium flex justify-center items-center w-full py-2 rounded-md rounded-t-none bg-orange-200 hover:bg-orange-400 hover:text-white relative bottom-0' onClick={() => addToCart(product)}>Add To Cart <ShoppingCartIcon className='w-5 h-5 ms-1'></ShoppingCartIcon></button>
          </div>
     );
};

export default Product;