import React, { useState, useRef, useEffect } from 'react';
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
import RefreshIcon from '../../components/svg/RefreshIcon';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const OTP_LENGTH = 6;
const RESEND_TIMER = 45;

const Setnewpass = () => {
  const navigation = useNavigation<NavigationProp>();
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState(RESEND_TIMER);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (!canResend) return;
    setOtp(Array(OTP_LENGTH).fill(''));
    setTimer(RESEND_TIMER);
    setCanResend(false);
    inputRefs.current[0]?.focus();
  };

  const handleContinue = () => {
    const code = otp.join('');
    if (code.length < OTP_LENGTH) return;
    console.log('OTP submitted:', code);
    navigation.navigate('ConfirmedPassword');
  };

  const formatTimer = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const isOtpComplete = otp.join('').length === OTP_LENGTH;

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
          <Text style={styles.title}>Verification OTP sent</Text>
          <Text style={styles.subtitle}>
            We've sent a verification code to ck******@gmail.com{'\n'}Please
            enter the code below to verify your account.
          </Text>

          {/* OTP Input Group */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Type your 6 digits Security code</Text>

            {/* 6 OTP Boxes */}
            <View style={styles.otpRow}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={ref => {
                    inputRefs.current[index] = ref;
                  }}
                  style={[styles.otpBox, digit ? styles.otpBoxFilled : null]}
                  value={digit}
                  onChangeText={value => handleChange(value, index)}
                  onKeyPress={e => handleKeyPress(e, index)}
                  keyboardType="numeric"
                  maxLength={1}
                  textAlign="center"
                  selectionColor="#525252"
                />
              ))}
            </View>

            {/* Resend Section */}
            <Text style={styles.resendLabel}>Haven't got the OTP yet?</Text>
            <TouchableOpacity
              style={[
                styles.resendButton,
                canResend && styles.resendButtonActive,
              ]}
              onPress={handleResend}
              disabled={!canResend}
            >
              <Text style={styles.resendIcon}>
                <RefreshIcon />
              </Text>
              <Text
                style={[
                  styles.resendText,
                  canResend && styles.resendTextActive,
                ]}
              >
                Resend OTP {canResend ? '' : formatTimer(timer)}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Continue Button */}
          <TouchableOpacity
            style={[
              styles.loginButton,
              !isOtpComplete && styles.loginButtonDisabled,
            ]}
            onPress={handleContinue}
            activeOpacity={0.8}
            disabled={!isOtpComplete}
          >
            <Text style={styles.loginButtonText}>Continue</Text>
          </TouchableOpacity>

          {/* Need Help Button */}
          <TouchableOpacity style={styles.loginButton1}>
            <Text style={styles.loginButtonText1}>Need help?</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Setnewpass;
