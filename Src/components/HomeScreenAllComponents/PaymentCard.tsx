import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  Check,
  X,
  Play,
  Printer,
  CircleAlert,
  CircleAlertIcon,
} from 'lucide-react-native';
import styles from '../../Screen/HomeScreenAppoinments/HomeScreenAll/Style'; // path adjust করো
import CheckCircleIcon from '../svg/CheckCircleIcon';
import DownloadTrayIcon from '../svg/DownloadTrayIcon';
import DocumentIcon from '../svg/DocumentIcon';
import Deleteicon from '../svg/Deleteicon';
import Sendicon from '../svg/SendIcon';
import type { Payment } from '../../types';

// ─── Pay Step Config ──────────────────────────────────────────────────────────
type PayStepCfg = {
  label: string;
  bg: string;
  iconType: 'check' | 'x' | 'play' | 'circle';
  date: string;
};

const PAY_STEP_CONFIG: Record<string, PayStepCfg[]> = {
  'Paid . to Confirm': [
    { label: 'Started', bg: '#36C76C', iconType: 'check', date: '24 Feb' },
    { label: 'Pending', bg: '#36C76C', iconType: 'check', date: '24 Feb' },
    { label: 'Confirm', bg: '#DCBD55', iconType: 'check', date: 'Pending' },
  ],
  'Paid · to Confirm': [
    { label: 'Started', bg: '#36C76C', iconType: 'check', date: '24 Feb' },
    { label: 'Pending', bg: '#36C76C', iconType: 'check', date: '24 Feb' },
    { label: 'Confirm', bg: '#DCBD55', iconType: 'check', date: 'Pending' },
  ],
  Confirmed: [
    { label: 'Started', bg: '#27AE60', iconType: 'check', date: '24 Feb' },
    { label: 'Paid', bg: '#27AE60', iconType: 'check', date: '24 Feb' },
    { label: 'Confirmed', bg: '#27AE60', iconType: 'check', date: '24 Feb' },
  ],
  Expired: [
    { label: 'Started', bg: '#27AE60', iconType: 'check', date: '24 Feb' },
    { label: 'Expired', bg: '#FF317D', iconType: 'x', date: '24 Feb' },
    { label: 'Confirm', bg: '#788189', iconType: 'check', date: '' },
  ],
  Started: [
    { label: 'Started', bg: '#00BEB8', iconType: 'check', date: '24 Feb' },
    { label: 'Paid', bg: '#788189', iconType: 'x', date: '24 Feb' },
    { label: 'Confirm', bg: '#788189', iconType: 'x', date: 'Pending' },
  ],
};

const DEFAULT_PAY_STEPS: PayStepCfg[] = [
  { label: 'Paid', bg: '#635BFF', iconType: 'check', date: '—' },
  { label: 'Pending', bg: '#E0E0E0', iconType: 'circle', date: '—' },
  { label: 'Done', bg: '#E0E0E0', iconType: 'circle', date: '—' },
];

const AMOUNT_COLOR_MAP: Record<string, string> = {
  'Paid . to Confirm': '#171717',
  'Paid · toConfirm': '#171717',
  Confirmed: '#171717',
  Started: '#FF317D',
  Expired: '#FF317D',
};

const isGrayBg = (bg: string) => bg === '#E0E0E0' || bg === '#D0D0D0';

// ─── Pay Step Icon ────────────────────────────────────────────────────────────
const PayStepIcon = ({
  type,
  bg,
}: {
  type: PayStepCfg['iconType'];
  bg: string;
}) => {
  const color = isGrayBg(bg) ? '#9E9E9E' : '#FFFFFF';
  const props = { width: 14, height: 14, color, strokeWidth: 2.5 };
  if (type === 'check') return <Check {...props} />;
  if (type === 'x') return <X {...props} />;
  if (type === 'play') return <Play {...props} fill={color} strokeWidth={0} />;
  return <View style={[styles.payStepCircleEmpty, { borderColor: color }]} />;
};

// ─── Pay Booking Steps ────────────────────────────────────────────────────────
const PayBookingSteps = ({ status }: { status: string }) => {
  const steps = PAY_STEP_CONFIG[status] ?? DEFAULT_PAY_STEPS;
  return (
    <View style={styles.payStepsRow}>
      <View style={[styles.payConnector, styles.payConnectorLeft]} />
      <View style={[styles.payConnector, styles.payConnectorRight]} />
      {steps.map((step, i) => (
        <View key={i} style={styles.payStepItem}>
          <View style={[styles.payCircle, { backgroundColor: step.bg }]}>
            <PayStepIcon type={step.iconType} bg={step.bg} />
          </View>
          <View
            style={[styles.payLabelBadge, { backgroundColor: step.bg + '22' }]}
          >
            <Text
              style={[
                styles.payLabelText,
                styles.payLabelTextBase,
                { color: isGrayBg(step.bg) ? '#9E9E9E' : step.bg },
              ]}
            >
              {step.label}
            </Text>
          </View>
          <Text style={styles.payStepDate}>{step.date}</Text>
        </View>
      ))}
    </View>
  );
};

// ─── Pay Action Buttons ───────────────────────────────────────────────────────
const PayActionButtons = ({ status }: { status: string }) => {
  if (status === 'Paid . to Confirm' || status === 'Paid · toConfirm') {
    return (
      <>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.printBtn} activeOpacity={0.8}>
            <Printer width={15} height={15} color="#635BFF" strokeWidth={2} />
            <Text style={styles.printBtnText}>Print Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.detailsBtn, styles.detailsBtnDisabled]}
            activeOpacity={0.8}
          >
            <CheckCircleIcon size={20} color="#788189" />
            <Text style={styles.detailsBtnText}>Confirm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hintRow}>
          <CircleAlert width={10} height={10} color="#9E9E9E" />
          <Text style={styles.hintText}>
            Print the receipt first to confirm
          </Text>
        </View>
      </>
    );
  }

  if (status === 'Expired' || status === 'Started') {
    return (
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.deleteBtn} activeOpacity={0.8}>
          <Deleteicon size={20} color="#635BFF" />
          <Text style={styles.deleteBtnText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsBtn} activeOpacity={0.8}>
          <Sendicon size={20} color="#FFFFFF" />
          <Text style={styles.detailsBtnText}>Resend</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (status === 'Confirmed') {
    return (
      <>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.printBtn} activeOpacity={0.8}>
            <DownloadTrayIcon color="#635BFF" />
            <Text style={styles.printBtnText}>Download Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsBtn} activeOpacity={0.8}>
            <DocumentIcon color="#FFFFFF" />
            <Text style={styles.detailsBtnText}>View Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hintRow}>
          <CircleAlertIcon size={10} color="#9E9E9E" />
          <Text style={styles.hintText}>
            Print the receipt first to confirm
          </Text>
        </View>
      </>
    );
  }

  return (
    <View style={styles.actionRow}>
      <TouchableOpacity style={styles.printBtn} activeOpacity={0.8}>
        <Printer width={15} height={15} color="#635BFF" strokeWidth={2} />
        <Text style={styles.printBtnText}>Print Receipt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.detailsBtn} activeOpacity={0.8}>
        <DownloadTrayIcon color="#FFFFFF" />
        <Text style={styles.detailsBtnText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

// ─── PaymentCard (shared) ───────────────────────────────────────────
const PaymentCard = ({ item }: { item: Payment & { [key: string]: any } }) => {
  const cardDigits = item.cardEnding ?? item.cardLast4;

  return (
    <View style={styles.payExpandedPanel}>
      <Text style={styles.bookingOrderTitle}>Booking Order</Text>

      <PayBookingSteps status={item.status} />

      <View style={styles.payDivider} />

      <View style={styles.payDetailsRow}>
        <View style={styles.payDetailCol}>
          <Text style={styles.payDetailLabel}>NAME</Text>
          <Text style={styles.payDetailValue}>{item.name ?? '—'}</Text>
        </View>
        <View style={styles.payDetailCol}>
          <Text style={styles.payDetailLabel}>AMOUNT</Text>
          <Text
            style={[
              styles.payDetailValue,
              styles.payAmountText,
              { color: AMOUNT_COLOR_MAP[item.status] ?? '#171717' },
            ]}
          >
            {item.amount ?? '—'}
          </Text>
        </View>
      </View>

      <View style={styles.payDetailsRow}>
        <View style={styles.payDetailCol}>
          <Text style={styles.payDetailLabel}>EMAIL</Text>
          <Text
            style={[styles.payDetailValue, styles.payDetailValueSm]}
            numberOfLines={1}
          >
            {item.email ?? '—'}
          </Text>
        </View>
        <View style={styles.payDetailCol}>
          <Text style={styles.payDetailLabel}>PHONE</Text>
          <Text style={[styles.payDetailValue, styles.payDetailValueSm]}>
            {item.phone ?? '—'}
          </Text>
        </View>
      </View>

      {(cardDigits || item.paymentMethod) && (
        <View style={styles.payMethodSection}>
          <Text style={styles.payDetailLabel}>PAYMENT METHOD</Text>
          <View style={styles.payMethodRow}>
            <View style={styles.payVisaBadge}>
              <Text style={styles.payVisaText}>{item.paymentMethod}</Text>
            </View>
            <Text style={styles.payDetailValue}>
              {cardDigits ? `ending in  ${cardDigits}` : item.paymentMethod}
            </Text>
          </View>
        </View>
      )}

      {!!item.notes && (
        <View style={styles.payNotesBox}>
          <Text style={styles.payDetailLabel}>NOTES</Text>
          <Text style={styles.payNotesText}>{item.notes}</Text>
        </View>
      )}

      <PayActionButtons status={item.status} />
    </View>
  );
};

export default PaymentCard;
