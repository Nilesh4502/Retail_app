import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import RoomScreen from './screens/Room';
import VideoScreen from './screens/Video'
import HomeScreen from './screens/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
        <Stack.Screen name="Room" component={RoomScreen} options={{title: 'Rooms'}} />
        <Stack.Screen name="Video" component={VideoScreen}options={{title: 'audio/Video'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
