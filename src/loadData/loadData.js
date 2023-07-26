import { getProductsFromLS } from "../utilities/utilities";

const loadData = async() => {
     const loadedData = await fetch('products.json');
     const products = await loadedData.json();

     const savedProduct = getProductsFromLS();
     let newCart = [];

     for(const savedId in savedProduct){
          const matchedProduct = products.find(product => product.id === savedId);
          let quantity = savedProduct[savedId];

          if(matchedProduct){
               matchedProduct.quantity = quantity;
               newCart.push(matchedProduct);
          }
     }
     return {products, newCart};
}

export {
     loadData
}