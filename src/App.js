import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BarraDeNavegacao from './components/barraDeNavegacao'
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#D73F8C',
  },
};

function App() {

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <BarraDeNavegacao />
      </NavigationContainer>
    </>

  );
}

export default App;