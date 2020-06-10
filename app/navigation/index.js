import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import ProductList from '../components/ProductList';
import ProductDetails from '../components/ProductDetails';
import ShoppingCart from '../components/ShoppingCart';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DanhMuc from '../components/DanhMuc';
import TimKiem from '../components/TimKiem';
import ThongBao from '../components/ThongBao';
import CaNhan from '../components/CaNhan';

const iconMap = {
  Home: 'home',
  DanhMuc: 'format-list-bulleted-square',
  TimKiem: 'magnify',
  ThongBao: 'bell-outline',
  CaNhan: 'account-outline',
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => (
            <Icon name={iconMap[route.name]} size={size} color={color} />
          ),
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{tabBarLabel: 'Trang chủ'}}
        />
        <Tab.Screen
          name="DanhMuc"
          component={DanhMuc}
          options={{tabBarLabel: 'Danh mục'}}
        />
        <Tab.Screen
          name="TimKiem"
          component={TimKiem}
          options={{tabBarLabel: 'Tìm kiếm'}}
        />
        <Tab.Screen
          name="ThongBao"
          component={ThongBao}
          options={{tabBarLabel: 'Thông báo'}}
        />
        <Tab.Screen
          name="CaNhan"
          component={CaNhan}
          options={{tabBarLabel: 'Cá nhân'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
