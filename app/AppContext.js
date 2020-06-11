import React, {useContext} from 'react';

export const AppContext = React.createContext({
  shoppingCart: [],
  addProductToCart: () => {},
  countProducts: () => {},
});

export const useAppContext = () => useContext(AppContext);
