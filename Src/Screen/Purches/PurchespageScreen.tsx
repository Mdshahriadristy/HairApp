import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import style from './Style';

import BgImage from '../../../assets/images/Purchase Page.png';
import { Check, X } from 'lucide-react-native';

type RootStackParamList = {
  Purches1: undefined;
  Purches2: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const PLANS = [
  {
    id: 'annual',
    label: 'Annual',
    price: '$899.10/m',
    badge: '50% OFF',
  },
  {
    id: 'monthly',
    label: 'Monthly',
    price: '$399.99/m',
    badge: null,
  },
];

const FEATURES = [
  'Unlimited Appointments',
  'Inventory Alerts',
  'Tax & Payroll Reports',
];

const PurchasePageScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('annual');

  const navigation = useNavigation<NavigationProp>();

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    if (planId === 'annual') {
      navigation.navigate('Purches1');
    } else if (planId === 'monthly') {
      navigation.navigate('Purches2'); // Monthly → Purches2
    }
  };

  return (
    <SafeAreaView style={style.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2FA" />

      {/* Full-screen fixed background */}
      <Image source={BgImage} style={style.bgAbsolute} resizeMode="cover" />

      {/* Header row: Close + Restore */}
      <View style={style.headerRow}>
        <TouchableOpacity style={style.closeButton} activeOpacity={0.7}>
          <X color={'#FFFFFFCC'} />
        </TouchableOpacity>
        <TouchableOpacity style={style.restoreButton} activeOpacity={0.7}>
          <Text style={style.restoreText}>Restore</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.scrollContent}
      >
        <View style={style.illustrationSpacer} />

        <View style={style.contentCard}>
          <Text style={style.title}>Enjoy All Premium Features</Text>

          {/* Feature list */}
          <View style={style.featureList}>
            {FEATURES.map(feature => (
              <View key={feature} style={style.featureItem}>
                <View style={style.checkCircle}>
                  <Check size={16} color={'#FAFAFA'} />
                </View>
                <Text style={style.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          {/* Plan cards */}
          <View style={style.planCardsContainer}>
            {PLANS.map(plan => {
              const isSelected = selectedPlan === plan.id;
              return (
                <View key={plan.id} style={style.planCardWrapper}>
                  {/* Floating badge centered on top border */}
                  {plan.badge && (
                    <View style={style.discountBadge}>
                      <Text style={style.discountText}>{plan.badge}</Text>
                    </View>
                  )}

                  <TouchableOpacity
                    style={[
                      style.planCard,
                      isSelected && style.planCardSelected,
                    ]}
                    activeOpacity={0.85}
                    onPress={() => handlePlanSelect(plan.id)}
                  >
                    <View style={style.planCardLeft}>
                      <View
                        style={[
                          style.radioOuter,
                          isSelected && style.radioOuterSelected,
                        ]}
                      >
                        {isSelected && <View style={style.radioInner} />}
                      </View>
                      <Text style={style.planName}>{plan.label}</Text>
                    </View>
                    <Text style={style.planPrice}>{plan.price}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          {/* CTA Button */}
          <TouchableOpacity style={style.ctaButton} activeOpacity={0.85}>
            <Text style={style.ctaText}>Start 7 Days Free Trail</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={style.footerContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={style.viewAllPlans}>View All Plans</Text>
              <View style={style.viewborder} />
            </TouchableOpacity>
            <Text style={style.cancelText}>Cancel anytime. No commitment.</Text>
            <View style={style.linksRow}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={style.linkText}>Terms of Service</Text>
                <View style={style.viewborder1} />
              </TouchableOpacity>

              <View style={style.divider} />

              <TouchableOpacity activeOpacity={0.7}>
                <Text style={style.linkText}>Privacy Policy</Text>
                <View style={style.viewborder1} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PurchasePageScreen;
