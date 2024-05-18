import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Retailer_register_Screen from './screens/Retailer_register';
import Retailer_Login_Screen from './screens/Retailer_Login';
import Distibutor_register_Screen from './screens/Distributor_register';
import Distributor_Login_Screen from './screens/Distributor_login';
import HomeScreen from './screens/Home';
import Retailer from './screens/Retailer';
import Distributor from './screens/Distributor';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Retailer_Register" component={Retailer_register_Screen} />
        <Stack.Screen name="Retailer_login" component={Retailer_Login_Screen} />
        <Stack.Screen name="Distributor_register" component={Distibutor_register_Screen} />
        <Stack.Screen name="Distributor_login" component={Distributor_Login_Screen} /> */}
        <Stack.Screen name="Retailer" component={Retailer} />
        {/* <Stack.Screen name="Distributor" component={Distributor} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
