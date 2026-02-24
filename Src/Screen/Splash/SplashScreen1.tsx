import { Image, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './Style1';

type Props = NativeStackScreenProps<any, 'Splash1'>;

const SplashScreen1 = ({ navigation }: Props) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('Welcome'); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, progressAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}
        />
        <View style={styles.progressBarContainer}>
          <Animated.View
            style={[
              styles.progressBarFill,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen1;