import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';

import PaginaPrincipal from '../pages/paginaPrincipal';
import Mais from '../pages/mais';
import TirarFoto from '../pages/tirarFoto'
import Login from '../pages/login';

const Tab = createMaterialBottomTabNavigator();

function BarraDeNavegacao() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="PaginaPrincipal" component={PaginaPrincipal} options={{ tabBarLabel: 'Feed de Imagens' }} />
      <Tab.Screen name="TirarFoto" component={TirarFoto} options={{ tabBarLabel: 'Tirar Uma Foto' }} />
      <Tab.Screen name="Mais" component={Mais}
        options={{ tabBarLabel: 'Mais' }} />
    </Tab.Navigator>
  );
}

export default BarraDeNavegacao;