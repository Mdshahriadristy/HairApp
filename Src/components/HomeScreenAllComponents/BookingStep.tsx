import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { StepStatus } from '../../types';
import { Check, X } from 'lucide-react-native';

// ─── Types ────────────────────────────────────────────────────────────────────
interface BookingStepProps {
  number: number;
  status: StepStatus;
  time: string;
  service: string;
  staffName: string;
  isLast?: boolean;
  isActive?: boolean;
}

interface StepConfig {
  circleBg: string;
  circleBorder: string;
  iconColor: string;
  labelColor: string;
  labelBg: string;
  labelBorder: string;
  label: string;
  showCheck: boolean;
  showX: boolean;
}

// ─── Inactive (grey) config — step 2 & 3 ─────────────────────────────────────
const INACTIVE_CONFIG: StepConfig = {
  circleBg: '#98A4AE',
  circleBorder: 'transparent',
  iconColor: '#FFFFFF',
  labelColor: '#363939',
  labelBg: '#FFFFFF',
  labelBorder: '#C8D0D6',
  label: 'To Do',
  showCheck: false,
  showX: false,
};

// ─── Active config per Status — step 1 only ───────────────────────────────────
const STEP_CONFIG: { [key in StepStatus]: StepConfig } = {
  ToDo: {
    circleBg: '#FFFDE5',
    circleBorder: 'transparent',
    iconColor: '#A88400',
    labelColor: '#A88400',
    labelBg: '#FFFDE5',
    labelBorder: 'transparent',
    label: 'To Do',
    showCheck: false,
    showX: false,
  },
  Pending: {
    circleBg: '#98A4AE',
    circleBorder: 'transparent',
    iconColor: '#FFFFFF',
    labelColor: '#363939',
    labelBg: '#FFFFFF',
    labelBorder: '#D2D3D3',
    label: 'To Do',
    showCheck: false,
    showX: false,
  },
  Booked: {
    circleBg: '#FFFDE5',
    circleBorder: 'transparent',
    iconColor: '#A88400',
    labelColor: '#A88400',
    labelBg: '#FFFDE5',
    labelBorder: '#E8C84A',
    label: 'To Do',
    showCheck: false,
    showX: false,
  },
  Confirmed: {
    circleBg: '#E0FFFE',
    circleBorder: 'transparent',
    iconColor: '#00837E',
    labelColor: '#00837E',
    labelBg: '#E0FFFE',
    labelBorder: 'transparent',
    label: 'To Do',
    showCheck: false,
    showX: false,
  },
  Arrived: {
    circleBg: '#FFFDE5',
    circleBorder: 'transparent',
    iconColor: '#A88400',
    labelColor: '#A88400',
    labelBg: '#FFFDE5',
    labelBorder: 'transparent',
    label: 'To Do',
    showCheck: false,
    showX: false,
  },
  Started: {
    circleBg: '#EAFFFF',
    circleBorder: 'transparent',
    iconColor: '#00BEB8',
    labelColor: '#00BEB8',
    labelBg: '#EAFFFF',
    labelBorder: 'transparent',
    label: 'Ongoing',
    showCheck: false,
    showX: false,
  },
  Ongoing: {
    circleBg: '#E0FFFE',
    circleBorder: 'transparent',
    iconColor: '#16CDC7',
    labelColor: '#16CDC7',
    labelBg: '#E0FFFE',
    labelBorder: 'transparent',
    label: 'To Do',
    showCheck: false,
    showX: false,
  },
  Completed: {
    circleBg: '#36C76C',
    circleBorder: 'transparent',
    iconColor: '#FFFFFF',
    labelColor: '#27AE60',
    labelBg: '#ECFFF1',
    labelBorder: 'transparent',
    label: 'Completed',
    showCheck: true,
    showX: false,
  },
  Expired: {
    circleBg: '#FEF0F0',
    circleBorder: 'transparent',
    iconColor: '#EB5757',
    labelColor: '#EB5757',
    labelBg: '#FFECF0',
    labelBorder: '#EB5757',
    label: 'Expired',
    showCheck: false,
    showX: true,
  },
  Cancelled: {
    circleBg: '#FF317D',
    circleBorder: 'transparent',
    iconColor: '#FFFFFF',
    labelColor: '#FF317D',
    labelBg: '#FEF0F0',
    labelBorder: 'transparent',
    label: 'Cancelled',
    showCheck: false,
    showX: true,
  },
};

// ─── BookingStepBoked ─────────────────────────────────────────────────────────
const BookingStepBoked = ({
  number,
  status,
  time,
  service,
  staffName,
  isLast = false,
  isActive = false,
}: BookingStepProps) => {
  const isAlwaysColored =
    status === 'Completed' || status === 'Cancelled' || status === 'Expired';
  const cfg: StepConfig =
    isActive || isAlwaysColored ? STEP_CONFIG[status] : INACTIVE_CONFIG;

  const circleStyle = {
    backgroundColor: cfg.circleBg,
    borderColor: cfg.circleBorder,
  };
  const labelStyle = {
    color: cfg.labelColor,
    backgroundColor: cfg.labelBg,
    borderColor: cfg.labelBorder,
  };
  const iconStyle = { color: cfg.iconColor };

  return (
    <View style={styles.stepWrapper}>
      {/* Connector line — hidden for last step */}
      {!isLast && <View style={styles.connector} />}

      {/* Circle */}
      <View style={[styles.circle, circleStyle]}>
        {cfg.showCheck ? (
          <Check color={cfg.iconColor} size={13} />
        ) : cfg.showX ? (
          <X color={cfg.iconColor} size={13} />
        ) : (
          <Text style={[styles.circleNumber, iconStyle]}>{number}</Text>
        )}
      </View>

      {/* Label badge */}
      <Text style={[styles.stepLabel, labelStyle]}>{cfg.label}</Text>

      {/* Info */}
      <Text style={styles.stepTime}>{time}</Text>
      <Text style={styles.stepService}>{service}</Text>
      <Text style={styles.stepStaff}>{staffName}</Text>
    </View>
  );
};

export default BookingStepBoked;

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  stepWrapper: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },

connector: {
  position: 'absolute',
  top: 12,
  left: '45%',
  right: '-48%',
  marginHorizontal: 7,   
  height: 8,
  borderTopWidth: 1.5,
  borderTopColor: '#B9C3CC',
  backgroundColor: 'transparent',
  rotation:-0.25,
  zIndex: 0,
},
  circle: {
    width: 23,
    height: 23,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#B9C3CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleNumber: {
    fontSize: 12.95,
    fontWeight: '400',
  },

  stepLabel: {
    fontSize: 9.25,
    
    fontWeight: '400',
    marginTop: 6,
    height: 15.7,
    width: 66.61,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 4,
  },

  stepTime: {
    fontSize: 10,
    color: '#9CA3AF',
    marginTop: 4,
  },
  stepService: {
    fontSize: 11,
    fontWeight: '500',
    color: '#111827',
    marginTop: 2,
  },
  stepStaff: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 1,
  },
});
