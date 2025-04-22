import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ZomatoHeader from './src/components/ZomatoHeader';
import ZomatoHomeScreen from './src/screens/ZomatoHomeScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import CartScreen from './src/screens/CartScreen';
import { CartProvider, useCart } from './src/context/CartContext';

const Stack = createNativeStackNavigator();

const AppContent = () => {
  const { getCartCount } = useCart();

  return (
    <Stack.Navigator
      initialRouteName="ZomatoHome"
      screenOptions={{
        header: (props) => <ZomatoHeader {...props} cartCount={getCartCount()} />,
      }}
    >
      <Stack.Screen 
        name="ZomatoHome" 
        component={ZomatoHomeScreen}
      />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen}
      />
      <Stack.Screen 
        name="Cart" 
        component={CartScreen}
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;