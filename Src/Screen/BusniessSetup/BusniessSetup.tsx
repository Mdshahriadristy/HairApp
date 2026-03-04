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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Style';
import Nameicon from '../../components/svg/Nameicon';
import EditDocumentIcon from '../../components/svg/EditDocumentIcon';
import MailIcon from '../../components/svg/MailIcon';
import ActivityProfileIcon from '../../components/svg/ActivityProfileIcon';
import SwapIcon from '../../components/svg/SwapIcon';

type RootStackParamList = {
  BusniessSetup: undefined;
  BusniessSetup2: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'BusniessSetup2'
>;

const BusniessSetup2 = () => {
  const navigation = useNavigation<NavigationProp>();

  const [fullName, setFullName] = useState('');
  const [Mail, setEmail] = useState('');
  const [cityName, setCityName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [VATid, setVATid] = useState('');
  const [Addressline1, setAddressline1] = useState('');
  const [Addressline2, setAddressline2] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    navigation.navigate('BusniessSetup2');
  };

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
        <Text style={styles.headerTitle}>Verify your identity</Text>

        <View style={styles.progressRow}>
          {[1, 2, 3, 4].map(step => (
            <View
              key={step}
              style={[
                styles.progressBar,
                step === 2
                  ? styles.progressBarActive
                  : styles.progressBarInactive,
              ]}
            />
          ))}
        </View>

        <Text style={styles.stepLabel}>Step 2 of 4</Text>

        <Text style={styles.title}>Your Business Logo</Text>
        <Text style={styles.subtitle}>
          Upload your business logo to help others recognize you.
        </Text>

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

        <Text style={styles.sectionTitle}>Contact & Business Information</Text>

        <Text style={styles.inputLabel}>Legal business name</Text>
        <View style={styles.inputWrapper}>
          <Nameicon size={13.33} />
          <TextInput
            style={styles.textInput}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Bella Vista Salon"
            placeholderTextColor="#171717"
            editable={true}
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => setFullName('')}>
            <EditDocumentIcon size={15} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.inputLabel}>Certified Email (PEC)</Text>
        <View style={styles.inputWrapper}>
          <MailIcon />
          <TextInput
            style={styles.textInput}
            value={Mail}
            onChangeText={setEmail}
            placeholder="bella.vista.salon@pec.it"
            placeholderTextColor="#171717"
            editable={true}
            autoCorrect={false}
          />
        </View>

        <View style={styles.Vatid}>
          <Text style={styles.inputLabel}>VAT ID</Text>
          <Text style={styles.Starcolor}> *</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            value={VATid}
            onChangeText={setVATid}
            placeholder="984654651321654"
            placeholderTextColor="#171717"
            editable={true}
            autoCorrect={false}
          />
        </View>

        <Text style={styles.inputLabel}>Address Line 1</Text>
        <View style={styles.inputWrapper}>
          <SwapIcon size={20} />
          <TextInput
            style={styles.textInput}
            value={Addressline1}
            onChangeText={setAddressline1}
            placeholder="Office Address"
            placeholderTextColor="#171717"
            editable={true}
            autoCorrect={false}
          />
        </View>

        <Text style={styles.inputLabel}>Address Line 2</Text>
        <View style={styles.inputWrapper}>
          <SwapIcon size={20} />
          <TextInput
            style={styles.textInput}
            value={Addressline2}
            onChangeText={setAddressline2}
            placeholder="Office Address"
            placeholderTextColor="#171717"
            editable={true}
            autoCorrect={false}
          />
        </View>

        <View style={styles.countrycode}>
          <View>
            <Text style={styles.inputLabel}>City Name</Text>
            <View style={styles.inputWrapper1}>
              <TextInput
                style={styles.textInput}
                value={cityName}
                onChangeText={setCityName}
                placeholder="Rome"
                placeholderTextColor="#171717"
                autoCorrect={false}
              />
            </View>
          </View>

          <View>
            <Text style={styles.inputLabel}>Post Code</Text>
            <View style={styles.inputWrapper2}>
              <TextInput
                style={styles.textInput}
                value={postcode}
                onChangeText={setPostcode}
                placeholder="00186"
                placeholderTextColor="#171717"
                keyboardType="numeric"
                autoCorrect={false}
              />
            </View>
          </View>
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

export default BusniessSetup2;
