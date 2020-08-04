import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PaginaPrincipal from '../pages/paginaPrincipal';
import Mais from '../pages/mais';
import TirarFoto from '../pages/tirarFoto'
import Login from '../pages/login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function BarraDeNavegacao() {
  return (
    <Tab.Navigator initialRouteName="Login">
      <Tab.Screen name="Login"
        component={Login}
        options={{
          tabBarVisible: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'log-in'} size={size} color={color} />;
          }
        }}
      />
      <Tab.Screen
        name="PaginaPrincipal"
        component={PaginaPrincipal}
        options={{
          tabBarLabel: 'Feed de Imagens',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'logo-rss'} size={size} color={color} />;
          }
        }} />
      <Tab.Screen name="TirarFoto"
        component={TirarFoto}
        options={{
          tabBarLabel: 'Tirar Uma Foto',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'camera'} size={size} color={color} />;
          }
        }} />
      <Tab.Screen name="Mais" component={Mais}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'ellipsis-horizontal'} size={size} color={color} />;
          }
        }} />
    </Tab.Navigator>

  );
}

export default BarraDeNavegacao;