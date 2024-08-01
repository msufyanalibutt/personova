import React, { useEffect } from 'react';
import {View,Text} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 3000);
    return () => clearTimeout(interval);
  }, [navigation]);
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  );
};
export default SplashScreen;
