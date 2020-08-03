import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PaginaPrincipal from '../pages/paginaPrincipal';
import Mais from '../pages/mais';
import TirarFoto from '../pages/tirarFoto'
import Login from '../pages/login';

const Tab = createMaterialBottomTabNavigator();

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function BarraDeNavegacao() {
    
  return (
     <>
    <Stack.Navigator>  
    <Stack.Screen name="Login" component={Login} />      
    </Stack.Navigator>

    <Tab.Navigator>
    <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} options={{ tabBarLabel: 'Feed de Imagens' }} />
      <Stack.Screen name="TirarFoto" component={TirarFoto} options={{ tabBarLabel: 'Tirar Uma Foto',tabBarIcon: ()=> <Icon name='name'/>}} />
      <Stack.Screen name="Mais" component={Mais}
        options={{ tabBarLabel: 'Mais' }} />
    </Tab.Navigator>
    </>
  );
}

export default BarraDeNavegacao;