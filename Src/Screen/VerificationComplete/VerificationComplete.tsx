import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './Style';
import Userinfo from '../../components/svg/Userinfo';
import { RootStackParamList } from '../../navigator/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'VerificationComplete'>;

const VerificationComplete = ({ navigation }: Props) => {
  const handleContinue = () => {
    navigation.replace('ProfileSetUp');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo1.png')}
        />

        {/* Header */}
        <View>
          <Text style={styles.title}>Verification Done</Text>
          <Text style={styles.subtitle}>
            Your email verification is complete. Continue to your profile setup.
          </Text>
        </View>

        {/* Status */}
        <View style={styles.Verification}>
          <Userinfo size={16.66} />
          <Text style={styles.Vtext}>Status: Verified</Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* Need Help */}
        <TouchableOpacity style={styles.loginButton1}>
          <Text style={styles.loginButtonText1}>Need help?</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationComplete;