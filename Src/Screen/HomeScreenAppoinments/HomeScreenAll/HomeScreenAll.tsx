import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { EllipsisVertical, Search } from 'lucide-react-native/icons';

import APPOINTMENTS_DATA from '../../../data/Appointments.json';
import PAYMENTS_DATA from '../../../data/Payments.json';
import type { Appointment, Payment, TabConfig } from '../../../types';
import styles from './Style';
import Notification from '../../../components/svg/Notification';
import Appoinments from '../../../components/svg/Appoinments';
import Paymenticon from '../../../components/svg/PaymentIcon';
import AppointmentCard from '../../../components/HomeScreenAllComponents/AppointmentCard';
import PaymentCard from '../../../components/HomeScreenAllComponents/PaymentCard';

// ─── Navigation Types ─────────────────────────────────────────────────────────
type RootStackParamList = {
  AllPayments: undefined;
  AllAppointments: undefined;
};
type NavProp = NativeStackNavigationProp<RootStackParamList>;

// ─── Constants ────────────────────────────────────────────────────────────────
const APPOINTMENTS = APPOINTMENTS_DATA as Appointment[];
const PAYMENTS = PAYMENTS_DATA as unknown as Payment[];
const DEFAULT_AVATAR = 'https://randomuser.me/api/portraits/women/44.jpg';
const PREVIEW_COUNT = 3;

const APPT_TABS: TabConfig[] = [
  { label: 'All',       status: null,        color: '#F5F5F5', activeColor: '#635BFF', textColor: '#737373' },
  { label: 'Booked',    status: 'Booked',    color: '#F5F5F5', activeColor: '#5B67EA', textColor: '#737373' },
  { label: 'Confirmed', status: 'Confirmed', color: '#F5F5F5', activeColor: '#16CDC7', textColor: '#737373' },
  { label: 'Arrived',   status: 'Arrived',   color: '#F5F5F5', activeColor: '#DCBD55', textColor: '#737373' },
  { label: 'Started',   status: 'Started',   color: '#F5F5F5', activeColor: '#00BEB8', textColor: '#737373' },
  { label: 'Complete',  status: 'Complete',  color: '#F5F5F5', activeColor: '#36C76C', textColor: '#737373' },
  { label: 'Cancelled', status: 'Cancelled', color: '#FFECF0', activeColor: '#FF317D', textColor: '#FF317D' },
];

const PAY_TABS: TabConfig[] = [
  { label: 'All',              status: null,                activeColor: '#635BFF', color: '#F5F5F5', textColor: '#737373' },
  { label: 'Paid · to Confirm', status: 'Paid · to Confirm', activeColor: '#F2994A', color: '#F5F5F5', textColor: '#737373' },
  { label: 'Expired',          status: 'Expired',           activeColor: '#FF317D', color: '#F5F5F5', textColor: '#737373' },
  { label: 'Confirmed',        status: 'Confirmed',         activeColor: '#27AE60', color: '#F5F5F5', textColor: '#737373' },
  { label: 'Started',          status: 'Started',           activeColor: '#00BEB8', color: '#F5F5F5', textColor: '#737373' },
];

// ─── Badge Maps ───────────────────────────────────────────────────────────────
const APPT_BADGE_MAP: Record<string, { bg: string; text: string }> = {
  Booked:    { bg: '#EEF0FF', text: '#5B67EA' },
  Confirmed: { bg: '#E0FFFE', text: '#16CDC7' },
  Arrived:   { bg: '#FFFDE5', text: '#DCBD55' },
  Started:   { bg: '#EAFFFF', text: '#00BEB8' },
  Complete:  { bg: '#ECFFF1', text: '#36C76C' },
  Cancelled: { bg: '#FEF0F0', text: '#EB5757' },
};

const PAY_BADGE_MAP: Record<string, { bg: string; text: string }> = {
  'Paid · to Confirm': { bg: '#FFF8E7', text: '#F2994A' },
  Expired:             { bg: '#FFECF0', text: '#FF317D' },
  Confirmed:           { bg: '#E7FFEC', text: '#36C76C' },
  Started:             { bg: '#EAFFFF', text: '#00BEB8' },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const countByStatus = (
  data: Appointment[] | Payment[],
  status: string | null,
): number =>
  status ? data.filter(d => d.status === status).length : data.length;

// ─── StatusBadge ──────────────────────────────────────────────────────────────
const StatusBadge = ({
  status,
  variant = 'appointment',
}: {
  status: string;
  variant?: 'appointment' | 'payment';
}) => {
  const map = variant === 'payment' ? PAY_BADGE_MAP : APPT_BADGE_MAP;
  const { bg, text } = map[status] ?? { bg: '#FFFFFF', text: '#828282' };
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.badgeText, { color: text }]}>{status}</Text>
    </View>
  );
};

// ─── ListRow ──────────────────────────────────────────────────────────────────
const ListRow = ({
  item,
  expanded,
  onToggle,
  variant,
}: {
  item: Appointment | Payment;
  expanded: boolean;
  onToggle: () => void;
  variant: 'appointment' | 'payment';
}) => (
  <View style={[styles.rowContainer, expanded && styles.rowContainerExpanded]}>
    <View style={styles.rowHeader}>
      <Image source={{ uri: item.avatar }} style={styles.rowAvatar} />

      <View style={styles.rowInfo}>
        <View style={styles.rowTopLine}>
          <Text style={styles.rowName} numberOfLines={1}>
            {item.name}
          </Text>
          <StatusBadge status={item.status} variant={variant} />
        </View>
        <View style={styles.Service}>
          <Text style={styles.rowService} numberOfLines={1}>
            {item.service}
          </Text>
          <Text style={styles.rowTime}>{item.time}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.chevronWrap}
        onPress={onToggle}
        activeOpacity={0.6}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        {expanded ? (
          <ChevronUp width={24} height={24} color="#525252" />
        ) : (
          <ChevronDown width={24} height={24} color="#525252" />
        )}
      </TouchableOpacity>
    </View>

    {expanded &&
      (variant === 'payment' ? (
        <PaymentCard item={item as Payment} />
      ) : (
        <AppointmentCard item={item as Appointment} />
      ))}
  </View>
);

// ─── FilterTabs ───────────────────────────────────────────────────────────────
const FilterTabs = ({
  tabs,
  active,
  onSelect,
  data,
}: {
  tabs: TabConfig[];
  active: string;
  onSelect: (label: string) => void;
  data: Appointment[] | Payment[];
}) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.tabBar}
  >
    {tabs.map(tab => {
      const isActive = active === tab.label;
      const count = countByStatus(data, tab.status);
      const tabBgStyle = { backgroundColor: isActive ? tab.activeColor : tab.color };
      const tabTextStyle = { color: isActive ? '#FFFFFF' : tab.textColor };
      const pillBgStyle = {
        backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : tab.activeColor + '22',
      };
      const pillTextStyle = { color: isActive ? '#FFFFFF' : tab.activeColor };
      return (
        <TouchableOpacity
          key={tab.label}
          onPress={() => onSelect(tab.label)}
          style={[styles.tab, tabBgStyle]}
          activeOpacity={0.75}
        >
          <View style={styles.tabInner}>
            <Text style={[styles.tabText, tabTextStyle]}>{tab.label}</Text>
            {tab.status !== null && (
              <View style={[styles.tabCountPill, pillBgStyle]}>
                <Text style={[styles.tabCountText, pillTextStyle]}>{count}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

// ─── ProfileAvatar ────────────────────────────────────────────────────────────
const ProfileAvatar = ({ uri, onPress }: { uri: string; onPress: () => void }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.avatarWrapper}>
    <Image source={{ uri }} style={styles.headerAvatar} />
  </TouchableOpacity>
);

// ─── PreviewList ──────────────────────────────────────────────────────────────
const PreviewList = ({
  data,
  expandedId,
  onToggle,
  seeAllLabel,
  variant,
  onSeeAll,
}: {
  data: Appointment[] | Payment[];
  expandedId: string | null;
  onToggle: (id: string) => void;
  seeAllLabel: string;
  variant: 'appointment' | 'payment';
  onSeeAll?: () => void;
}) => {
  const visible = data.slice(0, PREVIEW_COUNT);
  return (
    <>
      {visible.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No data found</Text>
        </View>
      ) : (
        (visible as (Appointment | Payment)[]).map(item => (
          <ListRow
            key={item.id}
            item={item}
            expanded={expandedId === item.id}
            onToggle={() => onToggle(item.id)}
            variant={variant}
          />
        ))
      )}
      <TouchableOpacity activeOpacity={0.7} onPress={onSeeAll}>
        <Text style={styles.seeAllText}>{seeAllLabel}</Text>
      </TouchableOpacity>
    </>
  );
};

// ─── HomeScreenAll ────────────────────────────────────────────────────────────
const HomeScreenAll = () => {
  const navigation = useNavigation<NavProp>();

  const [profileUri, setProfileUri] = useState<string>(DEFAULT_AVATAR);
  const [apptFilter, setApptFilter] = useState('All');
  const [payFilter, setPayFilter] = useState('All');
  const [expandedAppt, setExpandedAppt] = useState<string | null>(null);
  const [expandedPay, setExpandedPay] = useState<string | null>(null);

  const handleAvatarPress = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1, selectionLimit: 1 },
      (res: ImagePickerResponse) => {
        if (res.didCancel || res.errorCode) return;
        const uri = res.assets?.[0]?.uri;
        if (uri) setProfileUri(uri);
      },
    );
  };

  const activeApptStatus = APPT_TABS.find(t => t.label === apptFilter)?.status ?? null;
  const activePayStatus  = PAY_TABS.find(t => t.label === payFilter)?.status  ?? null;

  const filteredAppointments: Appointment[] = activeApptStatus
    ? APPOINTMENTS.filter(a => a.status === activeApptStatus)
    : APPOINTMENTS;

  const filteredPayments: Payment[] = activePayStatus
    ? PAYMENTS.filter(p => p.status === activePayStatus)
    : PAYMENTS;

  const toggleAppt = (id: string) =>
    setExpandedAppt(prev => (prev === id ? null : id));
  const togglePay = (id: string) =>
    setExpandedPay(prev => (prev === id ? null : id));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          <ProfileAvatar uri={profileUri} onPress={handleAvatarPress} />
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconBtn}>
              <Search width={22} height={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Notification width={22} height={22} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Summary ── */}
        <View style={styles.summaryHeader}>
          <Text style={styles.summaryTitle}>Daily Summary</Text>
          <TouchableOpacity>
            <EllipsisVertical />
          </TouchableOpacity>
        </View>
        <View style={styles.summaryRow}>
          {[
            { label: 'Total received',  value: '$0.00', color: '#635BFF', border: styles.summaryCardBlue   },
            { label: 'Receipts issued', value: '0',     color: '#00BEB8', border: styles.summaryCardAkashi },
            { label: 'Last receipt',    value: 'None',  color: '#36C76C', border: styles.summaryCardGreen  },
          ].map(card => (
            <View key={card.label} style={[styles.summaryCard, card.border]}>
              <Text style={styles.summaryLabel}>{card.label}</Text>
              <Text style={[styles.summaryValue, { color: card.color }]}>{card.value}</Text>
              <TouchableOpacity>
                <Text style={styles.summaryLink}>See All</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* ── Appointments ── */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.Appoint}>
                <Appoinments width={20} height={20} />
              </View>
              <Text style={styles.sectionTitle}>Appointments</Text>
            </View>
            <Text style={styles.sectionDate}>Today</Text>
          </View>
          <FilterTabs
            tabs={APPT_TABS}
            active={apptFilter}
            onSelect={tab => { setApptFilter(tab); setExpandedAppt(null); }}
            data={APPOINTMENTS}
          />
          <PreviewList
            data={filteredAppointments}
            expandedId={expandedAppt}
            onToggle={toggleAppt}
            seeAllLabel="See All Appointments"
            variant="appointment"
            onSeeAll={() => navigation.navigate('AllAppointments')}
          />
        </View>

        {/* ── Payments ── */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <View style={styles.Appoint}>
                <Paymenticon width={20} height={20} />
              </View>
              <Text style={styles.sectionTitle}>Payments</Text>
            </View>
            <Text style={styles.sectionDate}>Today</Text>
          </View>
          <FilterTabs
            tabs={PAY_TABS}
            active={payFilter}
            onSelect={tab => { setPayFilter(tab); setExpandedPay(null); }}
            data={PAYMENTS}
          />
          <PreviewList
            data={filteredPayments}
            expandedId={expandedPay}
            onToggle={togglePay}
            seeAllLabel="See All Payments"
            variant="payment"
            onSeeAll={() => navigation.navigate('AllPayments')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreenAll;