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

// ─── Inactive (grey) config — step 2 & 3 default ─────────────────────────────
const INACTIVE_CONFIG: StepConfig = {
  circleBg: '#F3F4F6',
  circleBorder: '#D1D5DB',
  iconColor: '#9CA3AF',
  labelColor: '#9CA3AF',
  labelBg: '#FFFFFF',
  labelBorder: '#D1D5DB',
  label: 'To Do',
  showCheck: false,
  showX: false,
};

// ─── Active config per Status ─────────────────────────────────────────────────
const STEP_CONFIG: { [key in StepStatus]: StepConfig } = {
  ToDo: {
    circleBg: '#F3F4F6',
    circleBorder: '#D1D5DB',
    iconColor: '#9CA3AF',
    labelColor: '#9CA3AF',
    labelBg: '#FFFFFF',
    labelBorder: '#D1D5DB',
    label: 'To Do',
    showCheck: false,
    showX: false,
  },
  Pending: {
    circleBg: '#F3F4F6',
    circleBorder: '#D1D5DB',
    iconColor: '#9CA3AF',
    labelColor: '#9CA3AF',
    labelBg: '#FFFFFF',
    labelBorder: '#D1D5DB',
    label: 'To Do',
    showCheck: false,
    showX: false,
  },
  Booked: {
    circleBg: '#EEF0FF',
    circleBorder: '#5B67EA',
    iconColor: '#5B67EA',
    labelColor: '#5B67EA',
    labelBg: '#EEF0FF',
    labelBorder: '#5B67EA',
    label: 'Booked',
    showCheck: false,
    showX: false,
  },
  Confirmed: {
    circleBg: '#E0FFFE',
    circleBorder: '#16CDC7',
    iconColor: '#16CDC7',
    labelColor: '#16CDC7',
    labelBg: '#E0FFFE',
    labelBorder: '#16CDC7',
    label: 'Confirmed',
    showCheck: false,
    showX: false,
  },
  Arrived: {
    circleBg: '#FFFDE5',
    circleBorder: '#DCBD55',
    iconColor: '#DCBD55',
    labelColor: '#DCBD55',
    labelBg: '#FFFDE5',
    labelBorder: '#DCBD55',
    label: 'Arrived',
    showCheck: false,
    showX: false,
  },
  Started: {
    circleBg: '#FFF3E0',
    circleBorder: '#E65100',
    iconColor: '#E65100',
    labelColor: '#E65100',
    labelBg: '#FFF3E0',
    labelBorder: '#E65100',
    label: 'Started',
    showCheck: false,
    showX: false,
  },
  Ongoing: {
    circleBg: '#E0FFFE',
    circleBorder: '#16CDC7',
    iconColor: '#16CDC7',
    labelColor: '#16CDC7',
    labelBg: '#E0FFFE',
    labelBorder: '#16CDC7',
    label: 'Ongoing',
    showCheck: false,
    showX: false,
  },
  Completed: {
    circleBg: '#27AE60',
    circleBorder: '#27AE60',
    iconColor: '#FFFFFF',
    labelColor: '#27AE60',
    labelBg: '#E3F9ED',
    labelBorder: '#27AE60',
    label: 'Completed',
    showCheck: true,
    showX: false,
  },
  Expired: {
    circleBg: '#FEF0F0',
    circleBorder: '#EB5757',
    iconColor: '#EB5757',
    labelColor: '#EB5757',
    labelBg: '#FEF0F0',
    labelBorder: '#EB5757',
    label: 'Expired',
    showCheck: false,
    showX: true,
  },
  Cancelled: {
    circleBg: '#FF317D',
    circleBorder: '#FF317D',
    iconColor: '#FFFFFF',
    labelColor: '#FF317D',
    labelBg: '#FEE8F1',
    labelBorder: '#FF317D',
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


  // বাকি সব — শুধু step 1 (isActive) color দেখাবে
  const isAlwaysColored = status === 'Completed' || status === 'Cancelled';
  const cfg: StepConfig = (isActive || isAlwaysColored)
    ? STEP_CONFIG[status]
    : INACTIVE_CONFIG;

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
          <Check color="#FFFFFF" size={13} />
        ) : cfg.showX ? (
          <X color="#FFFFFF" size={13} />
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

  // ── Step wrapper ─────────────────────────────────────────────────────────────
  stepWrapper: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },

  // ── Connector line ────────────────────────────────────────────────────────────
  connector: {
    position: 'absolute',
    top: 11,
    left: '50%',
    right: '-50%',
    height: 1.5,
    backgroundColor: '#E5E7EB',
    zIndex: 0,
  },

  // ── Circle ────────────────────────────────────────────────────────────────────
  circle: {
    width: 23,
    height: 23,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  circleNumber: {
    fontSize: 11,
    fontWeight: '600',
  },

  // ── Label badge ───────────────────────────────────────────────────────────────
  stepLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 6,
    height: 15.7,
    width: 66.61,
    textAlign: 'center',

    borderRadius: 4,

  },

  // ── Info text ─────────────────────────────────────────────────────────────────
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