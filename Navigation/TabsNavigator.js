import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'
import Categorias from '../src/Screens/Categorias';
import Pagamentos from '../src/Screens/Pagamentos';
import Icon from 'react-native-vector-icons/Ionicons';
import Sobre from '../src/Screens/Sobre';

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        // Configuramos os icones que irão aparecer caso a tela esteja selecionada ou não
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Categorias') {
          iconName = focused
          ? 'list'
          : 'list-outline';
        } else if (route.name === 'Pagamentos') {
          iconName = focused
          ? 'card'
          : 'card-outline';
        } else if (route.name === 'Sobre') {
          iconName = focused
          ? 'people'
          : 'people-outline';
        }
        

        // Retornamos o ícone
        return <Icon name={iconName} size={size} color={color} />;
      },
      // Definimos as cores dos ícones
      tabBarActiveTintColor: '#0d6efd',
      tabBarInactiveTintColor: 'gray',
    })}    

    >
      <Tabs.Screen 
        name="Home" 
        component={StackNavigator} 
        options={{
          headerShown: true,
          title: 'Baazzar',
            headerStyle: {
              backgroundColor: '#484848',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
              fontSize: 40,
              paddingLeft: 550,
              paddingTop: 10,
              height: 100,
              fontFamily: 'Courier New'
            },
        }} 
      />
      <Tabs.Screen 
        name="Categorias" 
        component={Categorias}  
      />
      <Tabs.Screen 
        name="Pagamentos" 
        component={Pagamentos}      
      />
      <Tabs.Screen 
        name="Sobre" 
        component={Sobre}      
      />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;