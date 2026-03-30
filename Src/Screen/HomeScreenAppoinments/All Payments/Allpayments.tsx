import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
  Image,
  SectionList,
  StatusBar,
} from 'react-native';
import { ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react-native';
import { calStyles, fStyles, cardStyles, mainStyles } from './Style';

import paymentsJson from '../../../data/Payments.json';
import DownUpicon from '../../../components/svg/DownUpicon';
import PaymentCard from '../../../components/HomeScreenAllComponents/PaymentCard';
import type { Payment } from '../../../types';

// ─── Local Types ──────────────────────────────────────────────────────────────
interface DateFilter {
  startDate: Date | null;
  endDate: Date | null;
  period: string | null;
}

interface SectionData {
  title: string;
  data: Payment[];
}

const ALL_PAYMENTS: Payment[] = paymentsJson as unknown as Payment[];

// ─── Status Config ─────────────────────────────────────────────────────────────
const STATUS_CONFIG: Record<
  string,
  { bg: string; color: string; border: string }
> = {
  Confirmed: { bg: '#E0FFFE', color: '#00837E', border: 'transparent' },
  'Paid · to Confirm': {
    bg: '#FFFDE5',
    color: '#A88400',
    border: 'transparent',
  },
  Expired: { bg: '#FFECF0', color: '#EB5757', border: 'transparent' },
  Started: { bg: '#EAFFFF', color: '#00BEB8', border: 'transparent' },
  Cancelled: { bg: '#FEF0F0', color: '#FF317D', border: 'transparent' },
};

//  Payment badge colors
const PAY_BADGE_MAP: Record<string, { bg: string; text: string }> = {
  'Paid · to Confirm': { bg: '#FFF8E7', text: '#F2994A' },
  Expired: { bg: '#FFECF0', text: '#FF317D' },
  Confirmed: { bg: '#E7FFEC', text: '#36C76C' },
  Started: { bg: '#EAFFFF', text: '#00BEB8' },
};

// ─── Filter Tabs ──────────────────────────────────────────────────────────────
const FILTER_TABS: string[] = [
  'All',
  'Paid · to Confirm',
  'Expired',
  'Started',
  'Confirmed',
];

const PERIODS = ['Today', 'This Week', 'This Month', 'Last Month'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function parseDate(str: string): Date {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function fmtDate(date: Date): string {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${d}/${m}/${date.getFullYear()}`;
}
function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function todayDate(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}
function daysInMonth(y: number, m: number): number {
  return new Date(y, m + 1, 0).getDate();
}
function firstDayOfMonth(y: number, m: number): number {
  return new Date(y, m, 1).getDay();
}

// ─── Calendar ─────────────────────────────────────────────────────────────────
interface CalendarProps {
  value: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date | null;
}

const Calendar: React.FC<CalendarProps> = ({ value, onChange, minDate }) => {
  const now = value ?? todayDate();
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());

  const totalDays = daysInMonth(viewYear, viewMonth);
  const firstDay = firstDayOfMonth(viewYear, viewMonth);
  const today = todayDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= totalDays; d++)
    cells.push(new Date(viewYear, viewMonth, d));

  const prevMonth = () => {
    viewMonth === 0
      ? (setViewMonth(11), setViewYear(y => y - 1))
      : setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    viewMonth === 11
      ? (setViewMonth(0), setViewYear(y => y + 1))
      : setViewMonth(m => m + 1);
  };

  const rows: (Date | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));

  return (
    <View style={calStyles.wrapper}>
      <View style={calStyles.nav}>
        <TouchableOpacity onPress={prevMonth} style={calStyles.navBtn}>
          <Text style={calStyles.navArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={calStyles.navTitle}>
          {MONTHS[viewMonth]} {viewYear}
        </Text>
        <TouchableOpacity onPress={nextMonth} style={calStyles.navBtn}>
          <Text style={calStyles.navArrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={calStyles.row}>
        {DAYS.map(d => (
          <Text key={d} style={calStyles.dayHeader}>
            {d}
          </Text>
        ))}
      </View>

      {rows.map((row, ri) => (
        <View key={ri} style={calStyles.row}>
          {row.map((date, ci) => {
            if (!date) return <View key={ci} style={calStyles.cell} />;
            const isSelected = value ? sameDay(date, value) : false;
            const isToday = sameDay(date, today);
            const isDisabled = minDate ? date < minDate : false;
            return (
              <TouchableOpacity
                key={ci}
                onPress={() => !isDisabled && onChange(date)}
                disabled={isDisabled}
                style={[
                  calStyles.cell,
                  isSelected && calStyles.cellSelected,
                  !isSelected && isToday && calStyles.cellToday,
                ]}
              >
                <Text
                  style={[
                    calStyles.cellText,
                    isSelected && calStyles.cellTextSelected,
                    !isSelected && isToday && calStyles.cellTextToday,
                    isDisabled && calStyles.cellTextDisabled,
                  ]}
                >
                  {date.getDate()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};

// ─── Filter Modal ─────────────────────────────────────────────────────────────
interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filter: DateFilter) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  onApply,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [calendarFor, setCalendarFor] = useState<'start' | 'end' | null>(null);

  const handlePeriod = (p: string) => {
    setSelected(p);
    setCalendarFor(null);
    const t = todayDate();
    if (p === 'Today') {
      setStartDate(new Date(t));
      setEndDate(new Date(t));
    } else if (p === 'This Week') {
      const s = new Date(t);
      s.setDate(t.getDate() - t.getDay());
      const e = new Date(s);
      e.setDate(s.getDate() + 6);
      setStartDate(s);
      setEndDate(e);
    } else if (p === 'This Month') {
      setStartDate(new Date(t.getFullYear(), t.getMonth(), 1));
      setEndDate(new Date(t.getFullYear(), t.getMonth() + 1, 0));
    } else if (p === 'Last Month') {
      setStartDate(new Date(t.getFullYear(), t.getMonth() - 1, 1));
      setEndDate(new Date(t.getFullYear(), t.getMonth(), 0));
    }
  };

  const handleCalendarPick = (date: Date) => {
    if (calendarFor === 'start') {
      setStartDate(date);
      setEndDate(null);
      setCalendarFor('end');
    } else {
      setEndDate(date);
      setCalendarFor(null);
    }
    setSelected(null);
  };

  const handleClear = () => {
    setSelected(null);
    setStartDate(null);
    setEndDate(null);
    setCalendarFor(null);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={fStyles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity activeOpacity={1} style={fStyles.sheet}>
          <Text style={fStyles.title}>Select Period</Text>

          <View style={fStyles.periodGrid}>
            {PERIODS.map(p => {
              const active = selected === p;
              return (
                <TouchableOpacity
                  key={p}
                  onPress={() => handlePeriod(p)}
                  style={[fStyles.periodBtn, active && fStyles.periodBtnActive]}
                >
                  <Text
                    style={[
                      fStyles.periodText,
                      active && fStyles.periodTextActive,
                    ]}
                  >
                    {p}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={fStyles.titleCustomRange}>Custom Range</Text>

          <View style={fStyles.rangeRow}>
            {(['start', 'end'] as const).map(type => {
              const val = type === 'start' ? startDate : endDate;
              const active = calendarFor === type;
              return (
                <TouchableOpacity
                  key={type}
                  onPress={() => setCalendarFor(active ? null : type)}
                  style={[fStyles.dateInput, active && fStyles.dateInputActive]}
                >
                  <Text
                    style={[
                      fStyles.dateInputText,
                      !val && fStyles.dateInputPlaceholder,
                    ]}
                  >
                    {val ? fmtDate(val) : 'dd/mm/yyyy'}
                  </Text>
                  <Text style={fStyles.calendarIcon}>📅</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {calendarFor && (
            <View style={fStyles.calendarWrapper}>
              <View style={fStyles.calendarHeader}>
                <Text style={fStyles.calendarHeaderText}>
                  {calendarFor === 'start'
                    ? 'Select start date'
                    : 'Select end date'}
                </Text>
              </View>
              <Calendar
                value={calendarFor === 'start' ? startDate : endDate}
                onChange={handleCalendarPick}
                minDate={calendarFor === 'end' ? startDate : null}
              />
            </View>
          )}

          <View style={fStyles.actionRow}>
            <TouchableOpacity onPress={handleClear} style={fStyles.clearBtn}>
              <Text style={fStyles.clearText}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onApply({ startDate, endDate, period: selected })}
              style={fStyles.applyBtn}
            >
              <Text style={fStyles.applyText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

// ─── Payment Row Card (list item with expand toggle) ──────────────────────────
interface PaymentRowCardProps {
  item: Payment;
}

const PaymentRowCard: React.FC<PaymentRowCardProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const cfg = STATUS_CONFIG[item.status] ?? {
    bg: '#F3F4F6',
    color: '#6B7280',
    border: 'transparent',
  };

  return (
    <View style={[cardStyles.card, expanded && cardStyles.cardExpanded]}>
      {/* ── Row Header ──────────────────────────────────────────────────────── */}
      <TouchableOpacity
        style={cardStyles.row}
        onPress={() => setExpanded(v => !v)}
        activeOpacity={0.85}
      >
        <Image source={{ uri: item.avatar }} style={cardStyles.avatar} />

        <View style={cardStyles.info}>
          <View style={cardStyles.topLine}>
            <Text style={cardStyles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <View>
              <Text style={cardStyles.amount}>{item.amount}</Text>
            </View>
          </View>
          <View style={cardStyles.bottomLine}>
            <Text style={cardStyles.service} numberOfLines={1}>
              {item.service}
            </Text>

            <View
              style={[
                cardStyles.badge,
                { backgroundColor: cfg.bg, borderColor: cfg.border },
              ]}
            >
              <Text style={[cardStyles.badgeText, { color: cfg.color }]}>
                {item.status}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setExpanded(v => !v)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={cardStyles.chevronWrap}
        >
          {expanded ? (
            <ChevronUp width={20} height={20} color="#525252" />
          ) : (
            <ChevronDown width={20} height={20} color="#525252" />
          )}
        </TouchableOpacity>
      </TouchableOpacity>

      {/* ── Expanded Panel — shared PaymentCard component ───────────────────── */}
      {expanded && <PaymentCard item={item} />}
    </View>
  );
};



// ─── AllPayments Screen ───────────────────────────────────────────────────────
const AllPayments: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [showFilter, setShowFilter] = useState(false);
  const [dateFilter, setDateFilter] = useState<DateFilter | null>(null);
  const [dateChip, setDateChip] = useState('Feb 27');

  const filtered = useMemo<Payment[]>(() => {
    return ALL_PAYMENTS.filter(p => {
      // Search filter
      if (
        search &&
        !p.name.toLowerCase().includes(search.toLowerCase()) &&
        !p.service.toLowerCase().includes(search.toLowerCase())
      )
        return false;

      // Tab filter
      if (activeTab !== 'All' && p.status !== activeTab) return false;

      // Date filter — date is optional in Payment type
      if (dateFilter?.startDate && dateFilter?.endDate && p.date) {
        const d = parseDate(p.date);
        const s = new Date(dateFilter.startDate);
        s.setHours(0, 0, 0, 0);
        const e = new Date(dateFilter.endDate);
        e.setHours(23, 59, 59, 999);
        if (d < s || d > e) return false;
      }

      return true;
    });
  }, [search, activeTab, dateFilter]);

  const sections = useMemo<SectionData[]>(() => {
    const map: Record<string, Payment[]> = {};
    filtered.forEach(p => {
      const key = p.date ?? 'Feb 27,2026';
      if (!map[key]) map[key] = [];
      map[key].push(p);
    });
    return Object.entries(map)
      .sort(([a], [b]) => b.localeCompare(a))
      .map(([date, data]) => ({ title: date, data }));
  }, [filtered]);

  const handleApplyFilter = useCallback((f: DateFilter) => {
    setDateFilter(f);
    setShowFilter(false);
    if (f.period) setDateChip(f.period);
    else if (f.startDate && f.endDate)
      setDateChip(`${fmtDate(f.startDate)} - ${fmtDate(f.endDate)}`);
    else setDateChip('Feb 27');
  }, []);

  const handleClearDate = useCallback(() => {
    setDateFilter(null);
    setDateChip('Feb 27');
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Payment }) => <PaymentRowCard item={item} />,
    [],
  );

  const renderSectionHeader = useCallback(
    ({ section }: { section: SectionData }) => (
      <Text style={mainStyles.sectionHeader}>{section.title}</Text>
    ),
    [],
  );

  return (
    <View style={mainStyles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <View style={mainStyles.header}>
        <View style={mainStyles.titleRow}>
          <View style={mainStyles.titleLeft}>
            <TouchableOpacity>
              <ChevronLeft size={24} color="#635BFF" />
            </TouchableOpacity>
            <Text style={mainStyles.pageTitle}>Payments</Text>
          </View>
          <TouchableOpacity>
            <DownUpicon size={24} color="#635BFF" />
          </TouchableOpacity>
        </View>

        <View style={mainStyles.chipRow}>
          <TouchableOpacity
            onPress={() => setShowFilter(true)}
            style={mainStyles.chip}
          >
            <Text style={mainStyles.chipIcon}>📅</Text>
            <Text style={mainStyles.chipText}>{dateChip}</Text>
            {dateFilter && (
              <TouchableOpacity
                onPress={handleClearDate}
                hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
              >
                <Text style={mainStyles.chipClose}>✕</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>

        <View style={mainStyles.searchWrapper}>
          <Text style={mainStyles.searchIcon}>🔍</Text>
          <TextInput
            style={mainStyles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#9CA3AF"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={mainStyles.tabsContent}
        >
          {FILTER_TABS.map(tab => {
            const active = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(PAY_BADGE_MAP[tab] ? tab : 'All')}
                style={[
                  mainStyles.tab,
                  active && PAY_BADGE_MAP[tab] ? mainStyles.tabActive : mainStyles.tab,
                ]}
              >
                <Text
                  style={[
                    mainStyles.tabText,
                    active && mainStyles.tabTextActive,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* ── List ────────────────────────────────────────────────────────────── */}
      <SectionList<Payment, SectionData>
        sections={sections}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader} 
        contentContainerStyle={mainStyles.listContent}
        stickySectionHeadersEnabled={false}
      />

      {/* ── Filter Modal ─────────────────────────────────────────────────────── */}
      <FilterModal
        visible={showFilter}
        onClose={() => setShowFilter(false)}
        onApply={handleApplyFilter}
      />
    </View>
  );
};

export default AllPayments;
