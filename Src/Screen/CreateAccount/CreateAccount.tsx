import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/RootNavigator';
import styles from './Style';
import AppleIcon from '../../components/svg/Applelogo';
import GoogleIcon from '../../components/svg/GoogleIcon';
import MailIcon from '../../components/svg/MailIcon';
import LockIcon from '../../components/svg/LockIcon';
import EyeOffIcon from '../../components/svg/EyeOffIcon';
import EyeOnIcon from '../../components/svg/EyeOnIcon';
import Nameicon from '../../components/svg/Nameicon';
import { Check } from 'lucide-react-native/icons';
import ProfileCard from '../../components/svg/ProfileCard';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const getPasswordStrength = (
  pass: string,
): { label: string; color: string } => {
  if (pass.length === 8) return { label: '', color: 'transparent' };
  if (pass.length < 8) return { label: 'Weak', color: '#E8A838' };
  const hasUpper = /[A-Z]/.test(pass);
  const hasLower = /[a-z]/.test(pass);
  const hasNumber = /[0-9]/.test(pass);
  const hasSpecial = /[^A-Za-z0-9]/.test(pass);
  const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(
    Boolean,
  ).length;
  if (score < 10) return { label: 'Strong', color: '#2FA36B' };
  return { label: 'Weak', color: '#E8A838' };
};

const CreateAccount = () => {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [profilecard, setProfilecard] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const strength = getPasswordStrength(password);
  const isMatch = password === rePassword;
  const isNotMatch = rePassword.length > 0 && !isMatch;

  const isDisabled = !agreedToTerms || isNotMatch || !name || !email || !password;

  const handleContinue = () => {
    if (isDisabled) return;
    console.log('Create account pressed', { name, email, password, profilecard });
    navigation.navigate('Verification2');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* ── Logo ── */}
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo1.png')}
        />

        {/* ── Header ── */}
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Join us to elevate your salon business
        </Text>

        {/* ── Full Name ── */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputWrapper}>
            <Nameicon size={20} color="#525252" />
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#ABABAB"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
              autoCorrect={false}
            />
          </View>
        </View>

        {/* ── Email ── */}
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

        {/* ── Password ── */}
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

        {/* ── Re-enter Password ── */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Re-enter Password</Text>
          <View style={styles.inputWrapper}>
            <LockIcon width={20} height={20} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#ABABAB"
              value={rePassword}
              onChangeText={setRePassword}
              secureTextEntry={!showRePassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowRePassword(!showRePassword)}
              style={styles.eyeButton}
            >
              {showRePassword ? (
                <EyeOnIcon width={20} height={20} />
              ) : (
                <EyeOffIcon width={20} height={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Feedback: Error OR Strength ── */}
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

        {/* ── Role ── */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Role</Text>
          <View style={styles.inputWrapper1}>
            <ProfileCard size={20} />
            <TextInput
              style={styles.input}
              placeholder="Employee"
              placeholderTextColor="#ABABAB"
              value={profilecard}
              onChangeText={setProfilecard}
              autoCapitalize="words"
              autoCorrect={false}
            />
          </View>
        </View>

        {/* ── Terms & Conditions ── */}
        <TouchableOpacity
          style={styles.termsContainer}
          onPress={() => setAgreedToTerms(!agreedToTerms)}
          activeOpacity={0.8}
        >
          <View
            style={[styles.checkbox, agreedToTerms && styles.checkboxChecked]}
          >
            {agreedToTerms && (
              <Check height={12} width={12} color={'#F0EFFF'} />
            )}
          </View>
          <Text style={styles.termsText}>
            {'I agree to the '}
            <Text style={styles.termsLink}>terms and conditions</Text>
            {'. and '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
            {'.'}
          </Text>
        </TouchableOpacity>

        {/* ── Continue Button ── */}
        <TouchableOpacity
          style={[styles.loginButton, ]}
          onPress={handleContinue}
          activeOpacity={0.85}
          disabled={isDisabled}
        >
          <Text style={styles.loginButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* ── Divider ── */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* ── Social Buttons ── */}
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log('Google')}
            activeOpacity={0.8}
          >
            <GoogleIcon width={20} height={20} />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log('Apple')}
            activeOpacity={0.8}
          >
            <AppleIcon width={20} height={20} color="#000" />
            <Text style={styles.socialButtonText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* ── Sign In Link ── */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.signUpLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;