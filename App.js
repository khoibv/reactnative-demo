/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import MainNavigator from './app/navigation';
import {AppContext} from './app/AppContext';

const contextInitialValues = {
  shoppingCart: [],
};

const App: () => React$Node = () => {
  return (
    <AppContext.Provider value={contextInitialValues}>
      <MainNavigator />
    </AppContext.Provider>
  );
};

export default App;
