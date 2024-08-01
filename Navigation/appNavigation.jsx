import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash.screen';
import OnBoardingScreen from '../screens/onboarding.screen';
import SignInScreen from '../screens/signIn.screen';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          name="onBoarding"
          component={OnBoardingScreen}
        />
        <Stack.Screen
          name="Signin"
          component={SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
