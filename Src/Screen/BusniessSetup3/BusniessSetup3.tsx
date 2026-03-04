import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import styles from './Sytle';

const businessOptions = [
  'Manage team & shifts',
  'Automate reminders',
  'Online bookings',
  'Inventory management',
  'Financial reports',
  'Grow revenue',
];

const BusniessSetup3 = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleBack = () => {};
  const handleContinue = () => {};

  const toggleOption = (option: string) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option],
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
                step === 4
                  ? styles.progressBarActive
                  : styles.progressBarInactive,
              ]}
            />
          ))}
        </View>

        <Text style={styles.stepLabel}>Step 4 of 4</Text>

        {/* Title */}
        <Text style={styles.title}>What are you looking to achieve first?</Text>
        <Text style={styles.subtitle}>
          Choose the goals that are most important to you right now.
        </Text>

        {/* Select all that apply */}
        <Text style={styles.sectionTitle}>Select all that apply</Text>

        <View style={styles.BoxContainer}>
          {businessOptions.map(option => {
            const isSelected = selected.includes(option);
            return (
              <TouchableOpacity
                key={option}
                style={[
                  styles.inputWrapper,
                  isSelected && styles.inputWrapperSelected,
                ]}
                onPress={() => toggleOption(option)}
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
              selected.length === 0 && styles.continueButtonDisabled,
            ]}
            onPress={handleContinue}
            disabled={selected.length === 0}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusniessSetup3;
