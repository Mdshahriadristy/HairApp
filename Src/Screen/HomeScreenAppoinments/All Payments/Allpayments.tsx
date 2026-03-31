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
  StyleSheet,
} from 'react-native';
import { ChevronLeft, ChevronDown, ChevronUp, Search, ChevronRight } from 'lucide-react-native';
import { calStyles, fStyles, cardStyles, mainStyles } from './Style';

import paymentsJson from '../../../data/Payments.json';
import DownUpicon from '../../../components/svg/DownUpicon';
import Calendaricon from '../../../components/svg/Calendericon';
import PaymentCard from '../../../components/HomeScreenAllComponents/PaymentCard';
import type { Payment } from '../../../types';
import CalendarEditicon from '../../../components/svg/CalenderEditicon';

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

// ─── Tab Config — per-tab color ───────────────────────────────────────────────
type TabCfg = { label: string; status: string | null; activeColor: string };

const PAY_TABS: TabCfg[] = [
  { label: 'All',              status: null,               activeColor: '#635BFF' },
  { label: 'Paid · to Confirm',status: 'Paid · to Confirm',activeColor: '#F2994A' },
  { label: 'Expired',          status: 'Expired',          activeColor: '#FF317D' },
  { label: 'Confirmed',        status: 'Confirmed',        activeColor: '#27AE60' },
  { label: 'Started',          status: 'Started',          activeColor: '#00BEB8' },
];

// ─── Badge Map — matches screenshot pill colors ───────────────────────────────
const PAY_BADGE_MAP: Record<string, { bg: string; text: string }> = {
  'Paid · to Confirm':  { bg: '#FFF8E7', text: '#F2994A' },
  'Paid . to Confirm':  { bg: '#FFF8E7', text: '#F2994A' },
  'Paid · toConfirm':   { bg: '#FFF8E7', text: '#F2994A' },
  Expired:              { bg: '#FFECF0', text: '#FF317D' },
  Confirmed:            { bg: '#E7FFEC', text: '#27AE60' },
  Started:              { bg: '#EAFFFF', text: '#00BEB8' },
  Cancelled:            { bg: '#FEF0F0', text: '#FF317D' },
};

// ─── Date Helpers ─────────────────────────────────────────────────────────────
const PERIODS = ['Today', 'This Week', 'This Month', 'Last Month'];
const DAYS    = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS  = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

function parseDate(str: string): Date {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function fmtDate(d: Date): string {
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
}
// Format for section header: "Feb 28, 2026"
function fmtSectionDate(str: string): string {
  try {
    const [y, m, d] = str.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    const monthShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${monthShort[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  } catch {
    return str;
  }
}
function sameDay(a: Date, b: Date): boolean {
  return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate();
}
function todayDate(): Date {
  const d = new Date(); d.setHours(0,0,0,0); return d;
}
function daysInMonth(y: number, m: number): number { return new Date(y, m+1, 0).getDate(); }
function firstDayOfMonth(y: number, m: number): number { return new Date(y, m, 1).getDay(); }

// ─── Calendar ─────────────────────────────────────────────────────────────────
const Calendar: React.FC<{
  value: Date | null;
  onChange: (d: Date) => void;
  minDate?: Date | null;
}> = ({ value, onChange, minDate }) => {
  const now = value ?? todayDate();
  const [viewYear, setViewYear]   = useState(now.getFullYear());
  const [viewMonth, setViewMonth] = useState(now.getMonth());
  const today = todayDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDayOfMonth(viewYear, viewMonth); i++) cells.push(null);
  for (let d = 1; d <= daysInMonth(viewYear, viewMonth); d++) cells.push(new Date(viewYear, viewMonth, d));

  const rows: (Date | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));

  return (
    <View style={calStyles.wrapper}>
      <View style={calStyles.nav}>
        <TouchableOpacity
          onPress={() => viewMonth===0 ? (setViewMonth(11), setViewYear(y=>y-1)) : setViewMonth(m=>m-1)}
          style={calStyles.navBtn}
        >
          <ChevronLeft  size={22}/>
        </TouchableOpacity>
        <Text style={calStyles.navTitle}>{MONTHS[viewMonth]} {viewYear}</Text>
        <TouchableOpacity
          onPress={() => viewMonth===11 ? (setViewMonth(0), setViewYear(y=>y+1)) : setViewMonth(m=>m+1)}
          style={calStyles.navBtn}
        >
          <ChevronRight size={22}/>
        </TouchableOpacity>
      </View>
      <View style={calStyles.row}>
        {DAYS.map(d => <Text key={d} style={calStyles.dayHeader}>{d}</Text>)}
      </View>
      {rows.map((row, ri) => (
        <View key={ri} style={calStyles.row}>
          {row.map((date, ci) => {
            if (!date) return <View key={ci} style={calStyles.cell} />;
            const isSel   = value ? sameDay(date, value) : false;
            const isToday = sameDay(date, today);
            const isDis   = minDate ? date < minDate : false;
            return (
              <TouchableOpacity
                key={ci}
                onPress={() => !isDis && onChange(date)}
                disabled={isDis}
                style={[calStyles.cell, isSel && calStyles.cellSelected, !isSel && isToday && calStyles.cellToday]}
              >
                <Text style={[calStyles.cellText, isSel && calStyles.cellTextSelected, !isSel && isToday && calStyles.cellTextToday, isDis && calStyles.cellTextDisabled]}>
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


const FilterModal: React.FC<{
  visible: boolean;
  onClose: () => void;
  onApply: (f: DateFilter) => void;
}> = ({ visible, onClose, onApply }) => {
  const [selected, setSelected]       = useState<string | null>(null);
  const [startDate, setStartDate]     = useState<Date | null>(null);
  const [endDate, setEndDate]         = useState<Date | null>(null);
  const [calendarFor, setCalendarFor] = useState<'start' | 'end' | null>(null);

  const handlePeriod = (p: string) => {
    setSelected(p);
    setCalendarFor(null);
    const t = todayDate();
    if (p === 'Today') {
      setStartDate(new Date(t));
      setEndDate(new Date(t));
    } else if (p === 'This Week') {
      const s = new Date(t); s.setDate(t.getDate() - t.getDay());
      const e = new Date(s); e.setDate(s.getDate() + 6);
      setStartDate(s); setEndDate(e);
    } else if (p === 'This Month') {
      setStartDate(new Date(t.getFullYear(), t.getMonth(), 1));
      setEndDate(new Date(t.getFullYear(), t.getMonth() + 1, 0));
    } else if (p === 'Last Month') {
      setStartDate(new Date(t.getFullYear(), t.getMonth() - 1, 1));
      setEndDate(new Date(t.getFullYear(), t.getMonth(), 0));
    }
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
      {/* ── Full-screen dim — tap anywhere outside column to close ── */}
      <TouchableOpacity
        style={fStyles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        {/* ── Column: sheet on top, calendarCard below ── */}
        <TouchableOpacity
          activeOpacity={1}
          style={fStyles.column}
          onPress={() => {}}
        >

          <View style={fStyles.sheet}>

            {/* Select Period */}
            <Text style={fStyles.title}>Select Period</Text>
            <View style={fStyles.periodGrid}>
              {PERIODS.map(p => (
                <TouchableOpacity
                  key={p}
                  onPress={() => handlePeriod(p)}
                  style={[fStyles.periodBtn, selected === p && fStyles.periodBtnActive]}
                >
                  <Text style={[fStyles.periodText, selected === p && fStyles.periodTextActive]}>
                    {p}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Custom Range */}
            <Text style={fStyles.titleCustomRange}>Custom Range</Text>
            <View style={fStyles.rangeRow}>
              {(['start', 'end'] as const).map(type => {
                const val   = type === 'start' ? startDate : endDate;
                const isAct = calendarFor === type;
                return (
                  <TouchableOpacity
                    key={type}
                    onPress={() => setCalendarFor(isAct ? null : type)}
                    style={[fStyles.dateInput, isAct && fStyles.dateInputActive]}
                  >
                    <Text
                      style={[
                        fStyles.dateInputText,
                        !val && fStyles.dateInputPlaceholder,
                      ]}
                    >
                      {val ? fmtDate(val) : 'dd/mm/yyyy'}
                    </Text>
                    <CalendarEditicon color="#635BFF" size={18} />
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Clear / Apply */}
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
          </View>


          {calendarFor && (
            <View style={fStyles.calendarCard}>
              <Calendar
                value={calendarFor === 'start' ? startDate : endDate}
                onChange={date => {
                  if (calendarFor === 'start') {
                    setStartDate(date);
                    setEndDate(null);
                    setCalendarFor('end');
                  } else {
                    setEndDate(date);
                    setCalendarFor(null);
                  }
                  setSelected(null);
                }}
                minDate={calendarFor === 'end' ? startDate : null}
              />
            </View>
          )}

        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

// ─── Status Badge ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: string }) => {
  const { bg, text } = PAY_BADGE_MAP[status] ?? { bg: '#F5F5F5', text: '#828282' };
  return (
    <View style={[localStyles.badge, { backgroundColor: bg }]}>
      <Text style={[localStyles.badgeText, { color: text }]}>{status}</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({

  badge: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 5,
  },
  badgeText: { fontSize: 10, fontWeight: '600' },

  // Tab active override colors set inline
  tabActive: { backgroundColor: '#635BFF', borderColor: '#635BFF' },
  tabInactive: { backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' },
  tabTextActive: { color: '#FFFFFF' },
});

// ─── Payment Row Card ─────────────────────────────────────────────────────────
const PaymentRowCard: React.FC<{ item: Payment }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[cardStyles.card, expanded && cardStyles.cardExpanded]}>
      <TouchableOpacity
        style={cardStyles.row}
        onPress={() => setExpanded(v => !v)}
        activeOpacity={0.85}
      >
        <Image
          source={{ uri: item.avatar ?? 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={cardStyles.avatar}
        />
        <View style={cardStyles.info}>
          {/* Top line: name + amount */}
          <View style={cardStyles.topLine}>
            <Text style={cardStyles.name} numberOfLines={1}>{item.name}</Text>
            <Text style={cardStyles.amount}>{item.amount}</Text>
          </View>
          {/* Bottom line: service + status badge */}
          <View style={cardStyles.bottomLine}>
            <Text style={cardStyles.service} numberOfLines={1}>{item.service}</Text>
            <StatusBadge status={item.status} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setExpanded(v => !v)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={cardStyles.chevronWrap}
        >
          {expanded
            ? <ChevronUp   width={20} height={20} color="#9CA3AF" />
            : <ChevronDown width={20} height={20} color="#9CA3AF" />
          }
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Expanded panel — shared PaymentCard */}
      {expanded && <PaymentCard item={item} />}
    </View>
  );
};

// ─── Tab Bar ─────────────────────────────────────────────────────────────────
const TabBar: React.FC<{
  activeTab: string;
  onSelect: (label: string) => void;
  counts: Record<string, number>;
}> = ({ activeTab, onSelect, counts }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={mainStyles.tabsContent}>
    {PAY_TABS.map(tab => {
      const isActive = activeTab === tab.label;
      const count    = counts[tab.label] ?? 0;
      const countTextColor = isActive ? '#FFFFFF' : tab.activeColor;
      const pillBgColor = isActive ? 'rgba(255,255,255,0.28)' : tab.activeColor + '22';
      return (
        <TouchableOpacity
          key={tab.label}
          onPress={() => onSelect(tab.label)}
          activeOpacity={0.75}
          style={[
            mainStyles.tab,
            isActive
              ? { backgroundColor: tab.activeColor, borderColor: tab.activeColor }
              : localStyles.tabInactive,
          ]}
        >
          <View style={mainStyles.tabInner}>
            <Text style={[mainStyles.tabText, isActive && localStyles.tabTextActive]}>
              {tab.label}
            </Text>
            {/* Count pill — only for non-All tabs */}
            {tab.status !== null && count > 0 && (
              <View
                style={[
                  mainStyles.tabCountPill,
                  { backgroundColor: pillBgColor },
                ]}
              >
                <Text style={[mainStyles.tabCountText, { color: countTextColor }]}>
                  {count}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

// ─── AllPayments Screen ───────────────────────────────────────────────────────
const AllPayments: React.FC = () => {
  const [search, setSearch]         = useState('');
  const [activeTab, setActiveTab]   = useState('All');
  const [showFilter, setShowFilter] = useState(false);
  const [dateFilter, setDateFilter] = useState<DateFilter | null>(null);
  const [dateChip, setDateChip]     = useState('');

  const activeStatus = useMemo(
    () => PAY_TABS.find(t => t.label === activeTab)?.status ?? null,
    [activeTab],
  );

  // Count per tab — based on full data (not filtered)
  const tabCounts = useMemo(() => {
    const r: Record<string, number> = {};
    PAY_TABS.forEach(tab => {
      r[tab.label] = tab.status
        ? ALL_PAYMENTS.filter(p => p.status === tab.status).length
        : ALL_PAYMENTS.length;
    });
    return r;
  }, []);

  const filtered = useMemo<Payment[]>(
    () =>
      ALL_PAYMENTS.filter(p => {
        if (
          search &&
          !p.name.toLowerCase().includes(search.toLowerCase()) &&
          !p.service.toLowerCase().includes(search.toLowerCase())
        ) return false;
        if (activeStatus && p.status !== activeStatus) return false;
        if (dateFilter?.startDate && dateFilter?.endDate && p.date) {
          const d = parseDate(p.date);
          const s = new Date(dateFilter.startDate); s.setHours(0,0,0,0);
          const e = new Date(dateFilter.endDate);   e.setHours(23,59,59,999);
          if (d < s || d > e) return false;
        }
        return true;
      }),
    [search, activeStatus, dateFilter],
  );

  const sections = useMemo<SectionData[]>(() => {
    const map: Record<string, Payment[]> = {};
    filtered.forEach(p => {
      const key = p.date ?? 'Unknown';
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
    else if (f.startDate && f.endDate) setDateChip(`${fmtDate(f.startDate)} - ${fmtDate(f.endDate)}`);
    else setDateChip('');
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Payment }) => <PaymentRowCard item={item} />,
    [],
  );

  const renderSectionHeader = useCallback(
    ({ section }: { section: SectionData }) => (
      <Text style={mainStyles.sectionHeader}>{fmtSectionDate(section.title)}</Text>
    ),
    [],
  );

  return (
    <View style={mainStyles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <View style={mainStyles.header}>

        {/* Title row */}
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

        {/* Date chip — calendar icon + label + ▾ */}
        <View style={mainStyles.chipRow}>
          <TouchableOpacity onPress={() => setShowFilter(true)} style={mainStyles.chip}>
            <Calendaricon size={20} />
            {dateChip ? (
              <Text style={mainStyles.chipText}>{dateChip}</Text>
            ) : (
              <Text style={mainStyles.chipText}>Feb 01-Feb 28</Text>
            )}
           <ChevronDown size={20}  color="#635BFF" />


          </TouchableOpacity>

        </View>

        {/* Search bar */}
        <View style={mainStyles.searchWrapper}>
          <Search size={18} color="#9CA3AF" />
          <TextInput
            style={mainStyles.searchInput}
            placeholder="Search"
            placeholderTextColor="#9CA3AF"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Tab bar */}
        <TabBar activeTab={activeTab} onSelect={setActiveTab} counts={tabCounts} />
      </View>

      {/* ── Section List ────────────────────────────────────────────────────── */}
      <SectionList<Payment, SectionData>
        sections={sections}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={mainStyles.listContent}
        stickySectionHeadersEnabled={false}

        
      />

      <FilterModal visible={showFilter} onClose={() => setShowFilter(false)} onApply={handleApplyFilter} />
    </View>
  );
};

export default AllPayments;