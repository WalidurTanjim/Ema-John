// get products from localStorage
const getProductsFromLS = () => {
     const savedProducts = localStorage.getItem('products');
     let products = {};

     if(savedProducts){
          products = JSON.parse(savedProducts);
     }
     return products;
}

// add products to localStorage
const addProductsToLS = (selectedProduct) => {
     const savedProducts = getProductsFromLS();
     let quantity = savedProducts[selectedProduct.id];

     if(!quantity){
          let newQuantity = selectedProduct.quantity;
          savedProducts[selectedProduct.id] = newQuantity;
     }

     localStorage.setItem('products', JSON.stringify(savedProducts));
}

// delete product from localStorage
const deleteProductFromLS = (selectedProduct) => {
     const savedProduct = getProductsFromLS();
     let quantity = savedProduct[selectedProduct.id];
     
     if(quantity){
          delete savedProduct[selectedProduct.id];
     }

     localStorage.setItem('products', JSON.stringify(savedProduct));
}

export {
     getProductsFromLS,
     addProductsToLS,
     deleteProductFromLS
}