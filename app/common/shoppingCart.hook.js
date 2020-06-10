import React, {useState} from 'react';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToShoppingCart = (product) => {
    const existingProductInCart = shoppingCart.filter(
      (p) => p.id === product.id,
    );
    if (existingProductInCart && existingProductInCart.length > 0) {
      // Increase counter of existing product in cart
      setShoppingCart(
        shoppingCart.map((item) => {
          if (item.id === product.id) {
            return {...item, count: item.count + 1};
          } else {
            return item;
          }
        }),
      );
      console.log('update', existingProductInCart, shoppingCart);
    } else {
      // Create new
      setShoppingCart([
        ...shoppingCart,
        {
          ...product,
          count: 1,
        },
      ]);
      console.log('create new', shoppingCart);
    }
  };

  const countProducts = () => {
    let count = 0;
    for (let i = 0; i < shoppingCart; i++) {
      count += shoppingCart[i].count;
    }

    console.log('Count is', count, shoppingCart);

    return count;
  };

  return {
    shoppingCart,
    addToShoppingCart,
    countProducts,
  };
};
