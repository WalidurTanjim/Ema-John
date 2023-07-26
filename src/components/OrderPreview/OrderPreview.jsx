import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteProductFromLS } from '../../utilities/utilities';
import Cart from '../Cart/Cart';
import SelectedProduct from '../SelectedProduct/SelectedProduct';

const OrderPreview = () => {
     const {newCart} = useLoaderData();
     const [cart, setCart] = useState(newCart);

     // delete product 
     const deleteProduct = (selectedProduct) => {
          const matchedProduct = cart.find(product => product.id === selectedProduct.id);
          let newCart = [];

          if(matchedProduct){
               const restProduct = cart.filter(product => product.id !== matchedProduct.id);
               newCart = [...restProduct];
          }
          setCart(newCart);
          deleteProductFromLS(selectedProduct);
     }

     return (
          <div className='orderPreview flex lg:justify-between lg:flex-row flex-col-reverse'>
               <div className='selectedProducts basis-4/5 my-5 flex justify-center'>
                    <div className='products lg:w-[500px]'>
                         {
                              cart.map(product => <SelectedProduct key={product.id} product={product} deleteProduct={deleteProduct}></SelectedProduct>)
                         }
                    </div>
               </div>

               <div className='cart p-5 basis-1/5 bg-orange-200'>
                    <Cart cart={cart}></Cart>
               </div>
          </div>
     );
};

export default OrderPreview;