import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import start from './Screen/start';
import Login from './Screen/login';
import signup from './Screen/signup';
import ResetPassword from './Screen/resetpassword';
import homename from './Screen/homename';
import welldone from './Screen/welldone';
import main from './Screen/main';
import profilescreen from './Screen/profilescreen';
import logout from './Screen/logout';
import userprofile from './Screen/userprofile';
import connectbulb from './Screen/connectbulb';
import bulbconnected from './Screen/bulbconnected';
import bulbcontrol from './Screen/bulbcontrol';
import connectfan from './Screen/connectfan';
import fanconnected from './Screen/fanconnected';
import fancontrol from './Screen/fancontrol';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="start" component={start} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="resetpassword" component={ResetPassword} />
        <Stack.Screen name="homename" component={homename} />
        <Stack.Screen name="welldone" component={welldone} />
        <Stack.Screen name="main" component={main} />
        <Stack.Screen name="profilescreen" component={profilescreen} />
        <Stack.Screen name="logout" component={logout} />
        <Stack.Screen name="userprofile" component={userprofile} />
        <Stack.Screen name="connectbulb" component={connectbulb} />
        <Stack.Screen name="bulbconnected" component={bulbconnected} />
        <Stack.Screen name="bulbcontrol" component={bulbcontrol} />
        <Stack.Screen name="connectfan" component={connectfan} />
        <Stack.Screen name="fanconnected" component={fanconnected} />
        <Stack.Screen name="fancontrol" component={fancontrol} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
