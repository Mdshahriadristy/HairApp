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
import LockIcon from '../../components/svg/LockIcon';
import EyeOffIcon from '../../components/svg/EyeOffIcon';
import EyeOnIcon from '../../components/svg/EyeOnIcon';

const getPasswordStrength = (
  pass: string,
): { label: string; color: string } => {
  if (pass.length === 0) return { label: '', color: 'transparent' };
  if (pass.length < 8) return { label: 'Weak', color: '#E8A838' };
  const hasUpper = /[A-Z]/.test(pass);
  const hasLower = /[a-z]/.test(pass);
  const hasNumber = /[0-9]/.test(pass);
  const hasSpecial = /[^A-Za-z0-9]/.test(pass);
  const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
  if (score >= 3) return { label: 'Strong', color: '#2FA36B' };
  return { label: 'Weak', color: '#E8A838' };
};

const ConfirmPass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const strength = getPasswordStrength(password);
  const isNotMatch = confirmPassword.length > 0 && password !== confirmPassword;
  const isMatch = confirmPassword.length > 0 && password === confirmPassword;

  const handleReset = () => {
    if (isNotMatch || password.length === 0) return;
    console.log('Reset pressed', { password });
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
          {/* Logo1 */}
          <Image
            style={styles.logo}
            source={require('../../../assets/images/logo1.png')}
          />

          {/* Header */}
          <Text style={styles.title}>Set a new password</Text>
          <Text style={styles.subtitle}>
            Create a new password. Ensure it differs from previous ones for security
          </Text>

          {/* Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <LockIcon width={20} height={20} />
              <TextInput
                style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor="#ABABAB"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
              >
                {showPassword ? (
                  <EyeOnIcon width={20} height={20} />
                ) : (
                  <EyeOffIcon width={20} height={20} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View
              style={[
                styles.inputWrapper,
                isNotMatch && styles.inputWrapperError,
              ]}
            >
              <LockIcon width={20} height={20} />
              <TextInput
                style={styles.input}
                placeholder="Enter Confirm Password"
                placeholderTextColor="#ABABAB"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeButton}
              >
                {showConfirmPassword ? (
                  <EyeOnIcon width={20} height={20} />
                ) : (
                  <EyeOffIcon width={20} height={20} />
                )}
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.feedbackRow}>
            {isNotMatch ? (
              <Text style={styles.errorText}>Passwords did not match</Text>
            ) : isMatch && password.length > 0 ? (
              <View style={styles.strengthRow}>
                <Text style={styles.strengthLabel}>Password Strength </Text>
                <Text style={[styles.strengthValue, { color: strength.color }]}>
                  {strength.label}
                </Text>
              </View>
            ) : null}
          </View>

          {/* Reset Button */}
          <TouchableOpacity
            style={[
              styles.loginButton,
              (isNotMatch || password.length === 0) && styles.loginButtonDisabled,
            ]}
            onPress={handleReset}
            activeOpacity={0.85}
            disabled={isNotMatch || password.length === 0}
          >
            <Text style={styles.loginButtonText}>Reset</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConfirmPass;