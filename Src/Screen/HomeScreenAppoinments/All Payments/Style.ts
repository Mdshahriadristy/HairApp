import { StyleSheet, Platform, StatusBar } from 'react-native';

// ─── Calendar Styles ──────────────────────────────────────────────────────────
export const calStyles = StyleSheet.create({
  wrapper:             { padding: 12, backgroundColor: '#FFFFFF' },
  nav:                 { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  navBtn:              { paddingHorizontal: 8 },
  navArrow:            { fontSize: 22, color: '#5B3FE4', fontWeight: '600' },
  navTitle:            { fontSize: 14, fontWeight: '700', color: '#1a1a2e' },
  row:                 { flexDirection: 'row', marginBottom: 2 },
  dayHeader:           { flex: 1, textAlign: 'center', fontSize: 11, color: '#9CA3AF', fontWeight: '500', paddingBottom: 6 },
  cell:                { flex: 1, aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 },
  cellSelected:        { backgroundColor: '#5B3FE4' },
  cellToday:           { backgroundColor: '#EEE9FF' },
  cellText:            { fontSize: 13, color: '#1a1a2e' },
  cellTextSelected:    { color: '#fff', fontWeight: '700' },
  cellTextToday:       { color: '#5B3FE4', fontWeight: '700' },
  cellTextDisabled:    { color: '#D1D5DB' },
});

// ─── Filter Modal Styles ──────────────────────────────────────────────────────
export const fStyles = StyleSheet.create({
  overlay:              { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'flex-start', alignItems: 'center' },
  sheet:                { marginTop: 100, backgroundColor: '#FFFFFF', borderRadius: 20, padding: 20, width: '88%', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.18, shadowRadius: 20, elevation: 12 },
  title:                { fontSize: 16, fontWeight: '700', color: '#1a1a2e', marginBottom: 12 },
  titleCustomRange:     { fontSize: 16, fontWeight: '700', color: '#1a1a2e', marginBottom: 12, marginTop: 14 },
  periodGrid:           { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 4 },
  periodBtn:            { width: '47%', paddingVertical: 10, borderRadius: 10, borderWidth: 1.5, borderColor: '#E5E7EB', alignItems: 'center', backgroundColor: '#fff' },
  periodBtnActive:      { borderColor: '#5B3FE4', backgroundColor: '#EEE9FF' },
  periodText:           { fontSize: 13, fontWeight: '500', color: '#374151' },
  periodTextActive:     { color: '#5B3FE4' },
  rangeRow:             { flexDirection: 'row', gap: 8, marginBottom: 8 },
  dateInput:            { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, backgroundColor: '#F9FAFB', borderRadius: 10, borderWidth: 1.5, borderColor: '#E5E7EB' },
  dateInputActive:      { borderColor: '#5B3FE4', backgroundColor: '#EEE9FF' },
  dateInputText:        { fontSize: 12, color: '#1a1a2e' },
  dateInputPlaceholder: { color: '#9CA3AF' },
  calendarIcon:         { fontSize: 16 },
  calendarWrapper:      { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, overflow: 'hidden', marginBottom: 8 },
  calendarHeader:       { backgroundColor: '#5B3FE4', padding: 8 },
  calendarHeaderText:   { color: '#fff', fontSize: 12, fontWeight: '500' },
  actionRow:            { flexDirection: 'row', gap: 10, marginTop: 12 },
  clearBtn:             { flex: 1, paddingVertical: 12, borderRadius: 10, borderWidth: 1.5, borderColor: '#E5E7EB', alignItems: 'center', backgroundColor: '#fff' },
  applyBtn:             { flex: 1, paddingVertical: 12, borderRadius: 10, backgroundColor: '#5B3FE4', alignItems: 'center' },
  clearText:            { fontSize: 14, fontWeight: '600', color: '#374151' },
  applyText:            { fontSize: 14, fontWeight: '600', color: '#fff' },
});

// ─── Payment Card Styles ──────────────────────────────────────────────────────
export const cardStyles = StyleSheet.create({
  // ── Card Shell ──────────────────────────────────────────────────────────────
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  cardExpanded: { borderColor: '#FFFFFF', elevation: 4 },

  // ── Row (header) ─────────────────────────────────────────────────────────────
  row:         { flexDirection: 'row', alignItems: 'center', padding: 12, gap: 12 },
  avatar:      { width: 52, height: 52, borderRadius: 8, backgroundColor: '#e5e7eb' },
  info:        { flex: 1, minWidth: 0 },
  topLine:     { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 4 },
  bottomLine:  { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  name:        { fontSize: 15, fontWeight: '700', color: '#171717', flex: 1, overflow: 'hidden' },
  service:     { fontSize: 12, color: '#635BFF', fontWeight: '600', flex: 1 },
  amount:      { fontSize: 13.5, fontWeight: '700', color: '#171717' },
  chevronWrap: { paddingLeft: 4 },

  // ── Status Badge ─────────────────────────────────────────────────────────────
  badge:     { paddingHorizontal: 10, paddingVertical: 2, borderRadius: 5, borderWidth: 1 },
  badgeText: { fontSize: 10.5, fontWeight: '600' },

  // ── Expanded Panel ───────────────────────────────────────────────────────────
  expandedPanel: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#FFFFFF',
  },
  bookingOrderTitle: {
    fontSize: 14.8,
    fontWeight: '700',
    color: '#29343D',
    marginBottom: 14,
    textAlign: 'center',
  },

  // ── Payment Steps ─────────────────────────────────────────────────────────────
  payStepsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    position: 'relative',
  },
  payConnector:      { position: 'absolute', top: 13, height: 1.5, backgroundColor: '#C8D0D6', zIndex: 0 },
  payConnectorLeft:  { left: '22%', right: '55%' },
  payConnectorRight: { left: '55%', right: '22%' },
  payStepItem:       { flex: 1, alignItems: 'center', zIndex: 1, gap: 6 },
  payCircle:         { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  payLabelBadge:     { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 5, alignItems: 'center' },
  payLabelText:      { fontSize: 10, fontWeight: '700' },
  payStepDate:       { fontSize: 10, color: '#9E9E9E', fontWeight: '400', textAlign: 'center' },

  // ── Divider ───────────────────────────────────────────────────────────────────
  payDivider: { height: 1, backgroundColor: '#E5E5E5', marginBottom: 16 },

  // ── Details Grid ──────────────────────────────────────────────────────────────
  payDetailsRow:    { flexDirection: 'row', marginBottom: 14, gap: 8 },
  payDetailCol:     { flex: 1, gap: 3 },
  payDetailLabel:   { fontSize: 11, fontWeight: '600', color: '#999999', letterSpacing: 0.6, marginBottom: 2 },
  payDetailValue:   { fontSize: 13, fontWeight: '600', color: '#171717' },
  payAmountText:    { fontSize: 14, fontWeight: '700' },
  payDetailValueSm: { fontSize: 12 },

  // ── Payment Method ────────────────────────────────────────────────────────────
  payMethodSection: { marginBottom: 14, gap: 6 },
  payMethodRow:     { flexDirection: 'row', alignItems: 'center', gap: 8 },
  payVisaBadge:     { backgroundColor: '#F0EFFF', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 3 },
  payVisaText:      { color: '#635BFF', fontSize: 12, fontWeight: '600' },

  // ── Notes ─────────────────────────────────────────────────────────────────────
  payNotesBox:  { backgroundColor: '#F8F8FB', borderRadius: 8, padding: 12, marginBottom: 16, gap: 6 },
  payNotesText: { fontSize: 12, color: '#525252', fontWeight: '400', lineHeight: 18 },

  // ── Action Buttons ────────────────────────────────────────────────────────────
  actionRow: { flexDirection: 'row', gap: 10 },
  printBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5,
    paddingVertical: 14, borderRadius: 8, borderWidth: 1.5, borderColor: '#635BFF', backgroundColor: '#fff',
  },
  printBtnText:  { fontSize: 13, fontWeight: '700', color: '#635BFF' },
  detailsBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6,
    paddingVertical: 14, borderRadius: 8, backgroundColor: '#635BFF',
  },
  detailsBtnText:     { fontSize: 13, fontWeight: '800', color: '#F0EFFF' },
  detailsBtnDisabled: { backgroundColor: '#BDBDBD' },
  deleteBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5,
    paddingVertical: 14, borderRadius: 8, borderWidth: 1.5, borderColor: '#635BFF', backgroundColor: '#fff',
  },
  deleteBtnText: { fontSize: 13, fontWeight: '700', color: '#635BFF' },
  hintRow:  { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 8 },
  hintText: { fontSize: 10, color: '#9E9E9E' },
});

// ─── Main Screen Styles ───────────────────────────────────────────────────────
export const mainStyles = StyleSheet.create({
  screen:       { flex: 1, backgroundColor: '#FFFFFF', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  header:       { backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 14, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#F1F3F5', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 4, elevation: 3 },
  titleRow:     { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 },
  titleLeft:    { flexDirection: 'row', alignItems: 'center', gap: 10 },
  pageTitle:    { fontSize: 20, fontWeight: '700', color: '#1a1a2e' },
  iconBtn:      { alignItems: 'center', justifyContent: 'center' },
  chipRow:      { flexDirection: 'row', marginBottom: 12 },
  chip:         { flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: '#EEE9FF', borderRadius: 20, borderWidth: 1.5, borderColor: '#5B3FE4' },
  chipIcon:     { fontSize: 13 },
  chipText:     { fontSize: 12.5, fontWeight: '600', color: '#5B3FE4' },
  chipClose:    { fontSize: 12, color: '#5B3FE4', marginLeft: 2 },
  searchWrapper:{ flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: '#F9FAFB', borderRadius: 12, borderWidth: 1.5, borderColor: '#E5E7EB', paddingHorizontal: 12, paddingVertical: 8, marginBottom: 12 },
  searchIcon:   { fontSize: 15 },
  searchInput:  { flex: 1, fontSize: 13.5, color: '#374151', padding: 0 },
  tabsContent:  { paddingBottom: 2, gap: 6 },
  tab:          { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, borderWidth: 1.5, borderColor: '#E5E7EB', backgroundColor: '#fff' },
  tabActive:    { backgroundColor: '#5B3FE4', borderColor: '#5B3FE4' },
  tabText:      { fontSize: 11.5, fontWeight: '500', color: '#374151' },
  tabTextActive:{ color: '#fff' },
  listContent:  { paddingHorizontal: 14, paddingTop: 14, paddingBottom: 80 },
  sectionHeader:{ fontSize: 11.5, color: '#9CA3AF', fontWeight: '600', marginBottom: 8, marginTop: 4, letterSpacing: 0.5 },
  emptyWrapper: { alignItems: 'center', paddingTop: 80 },
  emptyIcon:    { fontSize: 42, marginBottom: 12 },
  emptyTitle:   { fontSize: 15, fontWeight: '600', color: '#374151' },
  emptySubtitle:{ fontSize: 12, color: '#9CA3AF', marginTop: 4 },
});