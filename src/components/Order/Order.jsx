import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addProductsToLS } from '../../utilities/utilities';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Order = () => {
     const {products, newCart} = useLoaderData();
     const [cart, setCart] = useState(newCart);

     // addToCart handler
     const addToCart = (selectedProduct) => {
          const existProduct = cart.find(product => product.id === selectedProduct.id);
          let newCart = [];

          if(!existProduct){
               selectedProduct.quantity = 1;
               newCart = [...cart, selectedProduct];
          }else{
               alert('This product already added.');
               newCart = [...cart];
          }
          setCart(newCart);
          addProductsToLS(selectedProduct);
     }

     // clearCart handler
     const clearCart = () => {
          setCart([]);
          localStorage.removeItem('products');
     }

     return (
          <div className='order flex lg:justify-between lg:flex-row flex-col-reverse'>
               <div className='products container mx-auto p-5 basis-4/5 grid gap-5 grid-cols-1 lg:grid-cols-4'>
                    {
                         products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                    }
               </div>

               <div className='cart p-5 basis-1/5 bg-orange-200 lg:min-h-[100vh]'>
                    <Cart cart={cart} clearCart={clearCart}></Cart>
               </div>
          </div>
     );
};

export default Order;