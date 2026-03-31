import { StyleSheet, Platform, StatusBar } from 'react-native';

// ─── Calendar Styles ──────────────────────────────────────────────────────────
export const calStyles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: '#FFFFFF',
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  navBtn: {
    paddingHorizontal: 16,
  },

  navTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#171717',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 4,
    // ✅ FIX: ensure row never wraps and always spans full width
    width: '100%',
  },

  dayHeader: {
    // ✅ FIX: fixed width instead of flex:1 so all 7 columns are equal
    width: `${100 / 7}%` as any,
    textAlign: 'center',
    fontSize: 12,
    color: '#A3A3A3',
    fontWeight: '500',
    paddingBottom: 6,
  },

  cell: {
    // ✅ KEY FIX: flex:1 breaks when last row has < 7 items (single cell = full width)
    // Use fixed percentage so every cell is always exactly 1/7 of the row
    width: `${100 / 7}%` as any,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  cellSelected: {
    backgroundColor: '#5B3FE4',
  },

  cellToday: {
    backgroundColor: '#EEE9FF',
  },

  cellText: {
    fontSize: 14,
    color: '#171717',
  },

  cellTextSelected: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  cellTextToday: {
    color: '#5B3FE4',
    fontWeight: '700',
  },

  cellTextDisabled: {
    color: '#D1D5DB',
  },
});

// ─── Filter Modal Styles (calendar lives OUTSIDE the sheet) ──────────────────
export const fStyles = StyleSheet.create({
  // Dim full screen; tap outside column → close
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 90,
    paddingHorizontal: 16,
  },

  // Column wrapper — sheet + calendarCard stack vertically with gap
  column: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },

  // ── Main sheet card (Select Period + Custom Range + actions) ──
  sheet: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: 12,
  },

  // "Custom Range" label inside sheet
  titleCustomRange: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a2e',
    marginTop: 14,
    marginBottom: 12,
  },

  periodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 4,
  },
  periodBtn: {
    width: '47%',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  periodBtnActive: {
    borderColor: '#635BFF',
    backgroundColor: '#F5F0FF',
  },
  periodText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  periodTextActive: {
    color: '#635BFF',
    fontWeight: '600',
  },

  rangeRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 4,
  },
  dateInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    gap: 6,
  },
  dateInputActive: {
    borderColor: '#5B3FE4',
    backgroundColor: '#F5F0FF',
  },
  dateInputText: {
    fontSize: 13,
    color: '#737373',
    fontFamily: 'Manrope',
  },
  dateInputPlaceholder: {
    color: '#9CA3AF',
  },

  actionRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  clearBtn: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  applyBtn: {
    flex: 1,
    paddingVertical: 13,
    borderRadius: 8,
    backgroundColor: '#5B3FE4',
    alignItems: 'center',
  },
  clearText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  applyText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // ── Calendar card — SIBLING to sheet, appears below it ──
  calendarCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 8,
  },

  // kept for any legacy reference — no longer used inside sheet
  calendarWrapper: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
  },
});

// ─── Payment Card Styles ──────────────────────────────────────────────────────
export const cardStyles = StyleSheet.create({
  // Card shell
  card: {
    backgroundColor: '#FFFFFF',   // ✅ explicit white
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  cardExpanded: {
    borderColor: '#E0E0E0',
    elevation: 4,
  },

  // ✅ FIX: padding 16 on card row
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  info: {
    flex: 1,
    minWidth: 0,
  },

  topLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 14.5,
    fontWeight: '700',
    color: '#171717',
    flex: 1,
    overflow: 'hidden',
  },
  amount: {
    fontSize: 13.5,
    fontWeight: '700',
    color: '#171717',
    marginLeft: 8,
  },

  bottomLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  service: {
    fontSize: 12,
    color: '#635BFF',
    fontWeight: '600',
    flex: 1,
  },

  chevronWrap: {
    paddingLeft: 6,
  },

  badge: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 5,
  },
  badgeText: {
    fontSize: 10.5,
    fontWeight: '600',
  },

  // expanded panel — key matches PaymentCard.tsx usage
  payExpandedPanel: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  bookingOrderTitle: {
    fontSize: 14.8,
    fontWeight: '700',
    color: '#29343D',
    marginBottom: 14,
    textAlign: 'center',
  },

  // Payment steps
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
  payLabelTextBase:  {},
  payStepDate:       { fontSize: 10, color: '#9E9E9E', fontWeight: '400', textAlign: 'center' },
  payStepCircleEmpty:{},

  payDivider: { height: 1, backgroundColor: '#E5E5E5', marginBottom: 16 },

  // ✅ FIX: details grid padding 16
  payDetailsRow:    { flexDirection: 'row', marginBottom: 14, gap: 8 },
  payDetailCol:     { flex: 1, gap: 3 },
  payDetailLabel:   { fontSize: 11, fontWeight: '600', color: '#999999', letterSpacing: 0.6, marginBottom: 2 },
  payDetailValue:   { fontSize: 13, fontWeight: '600', color: '#171717' },
  payAmountText:    { fontSize: 14, fontWeight: '700' },
  payDetailValueSm: { fontSize: 12 },

  payMethodSection: { marginBottom: 14, gap: 6 },
  payMethodRow:     { flexDirection: 'row', alignItems: 'center', gap: 8 },
  payVisaBadge:     { backgroundColor: '#F0EFFF', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 3 },
  payVisaText:      { color: '#635BFF', fontSize: 12, fontWeight: '600' },

  payNotesBox:  { backgroundColor: '#F8F8FB', borderRadius: 8, padding: 12, marginBottom: 16, gap: 6 },
  payNotesText: { fontSize: 12, color: '#525252', fontWeight: '400', lineHeight: 18 },

  // Action buttons
  actionRow: { flexDirection: 'row', gap: 10 },
  printBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5,
    paddingVertical: 14, borderRadius: 8, borderWidth: 1.5, borderColor: '#635BFF', backgroundColor: '#FFFFFF',
  },
  printBtnText:       { fontSize: 13, fontWeight: '700', color: '#635BFF' },
  detailsBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6,
    paddingVertical: 14, borderRadius: 8, backgroundColor: '#635BFF',
  },
  detailsBtnText:     { fontSize: 13, fontWeight: '800', color: '#FFFFFF' },
  detailsBtnDisabled: { backgroundColor: '#BDBDBD' },
  deleteBtn: {
    flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5,
    paddingVertical: 14, borderRadius: 8, borderWidth: 1.5, borderColor: '#635BFF', backgroundColor: '#FFFFFF',
  },
  deleteBtnText: { fontSize: 13, fontWeight: '700', color: '#635BFF' },
  hintRow:       { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 4, marginTop: 8 },
  hintText:      { fontSize: 10, color: '#9E9E9E' },
});

// ─── Main Screen Styles ───────────────────────────────────────────────────────
export const mainStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  // ── Header
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 3,
  },

  titleRow:  { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 },
  titleLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  pageTitle: { fontSize: 20, fontWeight: '700', color: '#1a1a2e' },

  // ── Date chip
  chipRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#635BFF',
    alignSelf: 'flex-start',
  },
  chipText:      { fontSize: 12.5, fontWeight: '600', color: '#5B3FE4' },
  chipDropArrow: { fontSize: 11,   fontWeight: '700', color: '#5B3FE4' },
  chipClose:     { fontSize: 12,   color: '#5B3FE4', marginLeft: 2 },
  chipIcon:      { fontSize: 14 },

  // ── Search bar
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D4D4D4',
    paddingHorizontal: 14,
    height: 46,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#4A647A',
    padding: 0,
  },

  // ── Tab bar
  tabsContent: {
    gap: 6,
    alignItems: 'center',
    paddingBottom: 2,
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  tabActive:     { backgroundColor: '#635BFF', borderColor: '#635BFF' },
  tabText:       { fontSize: 12, fontWeight: '600', color: '#737373' },
  tabTextActive: { color: '#FFFFFF' },

  tabInner: { flexDirection: 'row', alignItems: 'center', gap: 6 },

  tabCountPill: {
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabCountText: { fontSize: 10.5, fontWeight: '700' },

  // ── Section list
  listContent: { paddingHorizontal: 16, paddingTop: 12, paddingBottom: 80 },  // ✅ 16

  sectionHeader: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 6,
    letterSpacing: 0.3,
  },

  // ── Empty state
  emptyWrapper:  { alignItems: 'center', paddingTop: 80 },
  emptyIcon:     { fontSize: 42, marginBottom: 12 },
  emptyTitle:    { fontSize: 15, fontWeight: '600', color: '#374151' },
  emptySubtitle: { fontSize: 12, color: '#9CA3AF', marginTop: 4 },
});