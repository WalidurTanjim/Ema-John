import { TrashIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import React from 'react';

const Cart = ({cart, clearCart}) => {
     let totalPrice = 0;
     let shippingCost = 0;
     let tax = 0;

     for(const product of cart){
          totalPrice = totalPrice + product.price * product.quantity;
          shippingCost = shippingCost + product.shipping * product.quantity;
          tax = tax + (product.price /100 *2) * product.quantity;
     }
     let grandTotal = totalPrice + shippingCost + tax;

     return (
          <div className='cart'>
               <p className='text-2xl text-center'>Order Summary</p>

               <div className='my-3'>
                    <p className='text-sm font-medium'><span className='text-gray-600'>Selected items:</span> {cart.length}</p>
                    <p className='text-sm font-medium'><span className='text-gray-600'>Total price:</span> ${totalPrice}</p>
                    <p className='text-sm font-medium'><span className='text-gray-600'>Shipping charge:</span> ${shippingCost}</p>
                    <p className='text-sm font-medium'><span className='text-gray-600'>Tax:</span> ${tax.toFixed(2)}</p>
                    <p className='text-lg font-medium'><span className='text-gray-600'>Grand total:</span> ${grandTotal.toFixed(2)}</p>
               </div>

               <button className='w-full rounded-md py-1 text-white font-medium flex justify-center items-center bg-red-500 hover:bg-red-600 my-1' onClick={clearCart}>Clear Cart<TrashIcon className='w-4 h-4 ms-1'></TrashIcon></button>
               <button className='w-full rounded-md py-1 text-white font-medium flex justify-center items-center bg-orange-500 hover:bg-orange-600 my-1'>View Orders<ArrowRightIcon className='w-4 h-4 ms-1'></ArrowRightIcon></button>
          </div>
     );
};

export default Cart;