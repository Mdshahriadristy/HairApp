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
import styles from './Style';
import MailIcon from '../../../Components/Svg/MailIcon';

const LoginScreen = () => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log('Login pressed', { email });
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
          <Text style={styles.subtitle}>Please enter your Email Address to reset the password</Text>

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

          {/* Login Button */}
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

export default LoginScreen;