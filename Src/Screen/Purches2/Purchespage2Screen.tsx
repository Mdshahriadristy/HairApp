import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';

import style from './Style.';
import { Check, X } from 'lucide-react-native';

const bgPattern = require('../../../assets/images/baground.png');

interface PlanCardProps {
  title: string;
  subtitle: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
}

const PlanCard = ({
  title,
  subtitle,
  price,
  features,
  isPopular = false,
  isSelected = false,
  onSelect,
}: PlanCardProps) => {
  return (
    <View style={[style.card]}>
      <View style={style.cardHeader}>
        <View style={style.cardHeaderText}>
          <Text style={style.planTitle}>{title}</Text>
          <Text style={style.planSubtitle}>{subtitle}</Text>
        </View>
        {isPopular && (
          <View style={style.popularBadge}>
            <Text style={style.popularBadgeText}>POPULAR</Text>
          </View>
        )}
      </View>

      <View style={style.priceRow}>
        <Text style={style.priceDollar}>$</Text>
        <Text style={style.priceAmount}>{price}</Text>
        <Text style={style.priceUnit}> / month</Text>
      </View>

      <View style={style.featureList}>
        {features.map((feature, index) => (
          <View key={index} style={style.featureItem}>
            <View style={style.checkCircle}>
              <Check size={11} color="#16CDC7" strokeWidth={3} />
            </View>
            <Text style={style.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[style.purchaseButton, isSelected && style.purchaseButtonActive]}
        activeOpacity={0.85}
        onPress={onSelect}
      >
        <Text
          style={[
            style.purchaseButtonText,
            isSelected && style.purchaseButtonTextActive,
          ]}
        >
          Purchase Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const plans = [
  {
    id: 'single',
    title: 'Single Use',
    subtitle: 'Perfect for freelancers starting their journey.',
    price: 49,
    features: [
      'Client Management',
      'Basic Reports',
      'Email Support',
      '1 User Account',
    ],
  },
  {
    id: 'multiple',
    title: 'Multiple Use',
    subtitle: 'Great for small teams expanding their reach.',
    price: 89,
    features: [
      'Everything in Single',
      'Team Scheduling',
      'SMS Reminders',
      'Up to 5 Users',
    ],
  },
  {
    id: 'extended',
    title: 'Extended Use',
    subtitle: 'Ideal for growing businesses with multiple locations.',
    price: 299,
    features: [
      'Everything in Multiple',
      'Advanced Analytics',
      'Priority Support',
      'Unlimited Users',
    ],
    isPopular: true,
  },
  {
    id: 'unlimited',
    title: 'Unlimited Use',
    subtitle: 'The ultimate toolkit for enterprise scaling.',
    price: 499,
    features: [
      'White Labeling',
      'API Access',
      'Dedicated Account Mgr',
      'Custom Integration',
    ],
  },
];

const PurchasePage2Screen = () => {
  const [billing, setBilling] = useState<'month' | 'annual'>('month');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <ImageBackground
      source={bgPattern}
      style={style.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={style.safeArea}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <ScrollView
          style={style.scrollView}
          contentContainerStyle={style.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Close Button */}
          <TouchableOpacity style={style.closeButton} activeOpacity={0.7}>
            <X size={16} color={'#FFFFFFCC'} />
          </TouchableOpacity>

          {/* Billing Toggle */}
          <View style={style.toggleWrapper}>
            <View style={style.toggle}>
              <TouchableOpacity
                style={[
                  style.toggleBtn,
                  billing === 'month' && style.toggleBtnActive,
                ]}
                onPress={() => setBilling('month')}
                activeOpacity={0.85}
              >
                <Text
                  style={[
                    style.toggleBtnText,
                    billing === 'month'
                      ? style.toggleBtnTextActive
                      : style.toggleBtnTextInactive,
                  ]}
                >
                  Month
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  style.toggleBtn,
                  billing === 'annual' && style.toggleBtnActive,
                ]}
                onPress={() => setBilling('annual')}
                activeOpacity={0.85}
              >
                <Text
                  style={[
                    style.toggleBtnText,
                    billing === 'annual'
                      ? style.toggleBtnTextActive
                      : style.toggleBtnTextInactive,
                  ]}
                >
                  Annual
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Hero Section */}
          <View style={style.heroSection}>
            <Text style={style.heroTitle}>
              Plans for every stage of{'\n'}your salon
            </Text>
            <Text style={style.heroSubtitle}>
              Choose the right tools today and scale{'\n'}effortlessly tomorrow.
            </Text>
          </View>

          {/* ✅ Horizontal Scrollable Plan Cards */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={style.cardsContainer}
            style={style.cardsScrollView}
          >
            {plans.map(plan => (
              <PlanCard
                key={plan.id}
                title={plan.title}
                subtitle={plan.subtitle}
                price={plan.price}
                features={plan.features}
                isPopular={plan.isPopular}
                isSelected={selectedPlan === plan.id}
                onSelect={() => setSelectedPlan(plan.id)}
              />
            ))}
          </ScrollView>

          {/* Footer */}
          <View style={style.footerContainer}>
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
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default PurchasePage2Screen;
