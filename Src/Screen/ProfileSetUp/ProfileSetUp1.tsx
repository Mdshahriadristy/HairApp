import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from './Style';
import Nameicon from '../../components/svg/Nameicon';
import EditDocumentIcon from '../../components/svg/EditDocumentIcon';
import MailIcon from '../../components/svg/MailIcon';
import ActivityProfileIcon from '../../components/svg/ActivityProfileIcon';

const ProfileSetUp1Screen = () => {
  const [fullName, setFullName] = useState('Darlene Robertson');
  const [Mail, setEmail] = useState('');
  const [phone, setPhone] = useState('0931567 890');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleBack = () => {};
  const handleContinue = () => {};

  const handlePickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.8, selectionLimit: 1 },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage ?? 'Image picker error');
          return;
        }
        const uri = response.assets?.[0]?.uri;
        if (uri) setProfileImage(uri);
      },
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header */}
        <Text style={styles.headerTitle}>Verify your identity</Text>

        {/* Progress Bar */}
        <View style={styles.progressRow}>
          {[1, 2, 3, 4].map(step => (
            <View
              key={step}
              style={[
                styles.progressBar,
                step === 1
                  ? styles.progressBarActive
                  : styles.progressBarInactive,
              ]}
            />
          ))}
        </View>

        <Text style={styles.stepLabel}>Step 1 of 4</Text>

        {/* Title */}
        <Text style={styles.title}>Your Profile Photo</Text>
        <Text style={styles.subtitle}>
          Upload a professional photo to help others recognize you.
        </Text>

        {/* Profile Photo */}
        <View style={styles.photoWrapper}>
          <TouchableOpacity
            style={styles.photoCircle}
            onPress={handlePickImage}
            activeOpacity={0.85}
          >
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.photoImage} />
            ) : (
              <View style={styles.photoOverlay}>
                <ActivityProfileIcon />
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Personal Information Section */}
        <Text style={styles.sectionTitle}>Personal Information</Text>

        {/* Full Name */}
        <Text style={styles.inputLabel}>Full Name</Text>
        <View style={styles.inputWrapper}>
          <Nameicon size={13.33} />
          <TextInput
            style={styles.textInput}
            value={fullName}
            onChangeText={setFullName}
            placeholder=" "
            placeholderTextColor="#AAAAAA"
            editable={true}
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => setFullName('')}>
            <EditDocumentIcon size={15} color="#000" />
          </TouchableOpacity>
        </View>
        <Text style={styles.helperText}>Must match your government ID.</Text>

        {/* Email Address */}
        <Text style={styles.inputLabel}>Email Address</Text>
        <View style={styles.inputWrapper}>
          <MailIcon color="#A3A3A3" />

          <TextInput
            style={styles.textInput}
            value={Mail}
            onChangeText={setEmail}
            placeholder="wildzrl8@gmail.com"
            placeholderTextColor="#AAAAAA"
            editable={true}
            autoCorrect={false}
          />
        </View>

        {/* Phone Number */}
        <Text style={styles.inputLabel}>Phone number</Text>
        <View style={styles.phoneRow}>
          <View style={styles.countryCode}>
            <Text style={styles.flagText}>🇮🇹</Text>
            <Text style={styles.countryCodeText}>+39</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Phone number"
            placeholderTextColor="#AAAAAA"
            editable={true}
          />
        </View>

        {/* Bottom Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            activeOpacity={0.8}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSetUp1Screen;
