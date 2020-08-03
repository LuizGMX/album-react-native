import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BarraDeNavegacao from './components/barraDeNavegacao'

const Stack = createStackNavigator();

function App() {

  return (
    <>
      <NavigationContainer>
        <BarraDeNavegacao />
      </NavigationContainer>
    </>

  );
}

export default App;