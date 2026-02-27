import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import styles from './Style';
import MailIcon from '../../components/svg/MailIcon';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    navigation.navigate('SetnewPassword');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar />
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <Image
            style={styles.logo}
            source={require('../../../assets/images/logo1.png')}
          />

          {/* Header */}
          <Text style={styles.title}>Forgot Password </Text>
          <Text style={styles.subtitle}>
            Please enter your Email Address to reset the password
          </Text>

          {/* Email Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email ID</Text>
            <View style={styles.inputWrapper}>
              <MailIcon width={20} height={20} />
              <TextInput
                style={styles.input}
                placeholder="Enter Email Address"
                placeholderTextColor="#ABABAB"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Reset Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.85}
          >
            <Text style={styles.loginButtonText}>Reset</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
