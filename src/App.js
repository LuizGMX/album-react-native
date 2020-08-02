import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import BarraDeNavegacao from './components/barraDeNavegacao'

/* 
function componentDidMount() {
  axios.get('URL AQUI')
    .then(response => {
      this.setState({ imageURL: response.data.message });
    })
    .catch(error => {
      console.log(error);
    });
}
*/

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