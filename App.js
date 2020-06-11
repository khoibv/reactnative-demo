/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import MainNavigator from './app/navigation';
import {AppContext} from './app/AppContext';

const App: () => React$Node = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const contextInitialValues = {
    shoppingCart,
    addProductToCart: (product) => {
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
    },

    countProducts: () => {
      let count = 0;
      for (let i = 0; i < shoppingCart.length; i++) {
        count += shoppingCart[i].count;
      }

      console.log('Count is', count, shoppingCart);

      return count;
    },
  };

  return (
    <AppContext.Provider value={contextInitialValues}>
      <MainNavigator />
    </AppContext.Provider>
  );
};

export default App;
