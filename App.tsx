import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/store';
import HomeScreen from './src/screens/HomeScreen';
import ItemListScreen from './src/screens/ItemListScreen';
import { RootStackParamList } from './src/types';
import { initializeApp } from './src/utils/appInitializer';

const Stack = createStackNavigator<RootStackParamList>();

const AppContent = () => {
  useEffect(() => {
    initializeApp();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f5f5f5' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ItemList" component={ItemListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
