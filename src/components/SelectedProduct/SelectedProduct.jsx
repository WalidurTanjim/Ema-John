import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import React from 'react';

const SelectedProduct = ({product, deleteProduct}) => {
     const {img, name, price, shipping, quantity} = product;

     return (
          <div className='selectedProduct p-1 border rounded-md mb-2 h-[90px] w-full flex items-center hover:shadow-md'>
               <img src={img} className="h-full w-[80px] rounded-md" alt="Product Image" />

               <div className='productsDetails mx-1 w-full flex justify-between items-center'>
                    <div>
                         <p className='font-medium'>{name}</p>
                         <p className='text-sm text-gray-800'>Price: <span className='text-orange-500'>${price}</span></p>
                         <p className='text-sm text-gray-800'>Shipping Charge: <span className='text-orange-500'>${shipping}</span></p>
                         <p className='text-sm text-gray-800 flex items-center'>Quantity: 
                              <span className='flex items-center border rounded-md ms-1'>
                                   <span className='p-1'><PlusIcon className='w-2 h-2'></PlusIcon></span>
                                        <span className='px-2 flex justify-center'>{quantity}</span>
                                   <span className='p-1'><MinusIcon className='w-2 h-2'></MinusIcon></span>
                              </span>
                         </p>
                    </div>
                    
                    <div className='border border-red-500 p-3 rounded-full bg-red-100 hover:bg-red-200 hover:border-red-600' onClick={() => deleteProduct(product)}>
                         <TrashIcon className='w-5 h-5 text-red-500'></TrashIcon>
                    </div>
               </div>
          </div>
     );
};

export default SelectedProduct;