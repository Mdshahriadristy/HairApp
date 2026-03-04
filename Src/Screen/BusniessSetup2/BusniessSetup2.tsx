import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './Style';

type RootStackParamList = {

  BusniessSetup2: undefined;
  BusniessSetup3: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BusniessSetup3'>;

const businessOptions = [
  'Salon',
  'Barbershop',
  'Clinic/Medical',
  'Spa/Wellness',
  'Others',
];

const BusniessSetup2 = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleContinue = () => {
    if (selected) {
      navigation.navigate('BusniessSetup3');
    }
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
                step === 3
                  ? styles.progressBarActive
                  : styles.progressBarInactive,
              ]}
            />
          ))}
        </View>

        <Text style={styles.stepLabel}>Step 3 of 4</Text>

        {/* Title */}
        <Text style={styles.title}>What best describes Your Business?</Text>
        <Text style={styles.subtitle}>
          This helps us tailor the experience to your business needs.
        </Text>

        {/* Select one option */}
        <Text style={styles.sectionTitle}>Select one option to continue</Text>

        <View style={styles.BoxContainer}>
          {businessOptions.map(option => {
            const isSelected = selected === option;
            return (
              <TouchableOpacity
                key={option}
                style={[
                  styles.inputWrapper,
                  isSelected && styles.inputWrapperSelected,
                ]}
                onPress={() => setSelected(option)}
                activeOpacity={0.8}
              >
                <Text style={[styles.text, isSelected && styles.textSelected]}>
                  {option}
                </Text>
              </TouchableOpacity>
            );
          })}
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
            style={[
              styles.continueButton,
              !selected && styles.continueButtonDisabled,
            ]}
            onPress={handleContinue}
            disabled={!selected}
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