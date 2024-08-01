import React from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Onboarding
        onSkip={() => console.log('onSkip')}
        onDone={() => console.log('Done')}
        containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lootie}>
                <Lottie
                  source={require('../assets/animations/animation1.json')}
                  style={{flex: 1}}
                  loop
                  autoPlay
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboaeding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lootie}>
                <Lottie
                  source={require('../assets/animations/animation1.json')}
                  style={{flex: 1}}
                  loop
                  autoPlay
                />
              </View>
            ),
            title: 'Work Seemlessly',
            subtitle: 'Done with React Native Onboaeding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lootie}>
                <Lottie
                  source={require('../assets/animations/animation1.json')}
                  style={{flex: 1}}
                  loop
                  autoPlay
                />
              </View>
            ),
            title: 'Achieve Higher Goals',
            subtitle: 'Done with React Native Onboaeding Swiper',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lootie: {
    width: 300,
    height: 300,
  },
});
