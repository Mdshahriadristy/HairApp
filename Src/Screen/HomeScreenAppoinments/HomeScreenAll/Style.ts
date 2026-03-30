import { StyleSheet } from 'react-native';

const COLORS = {
  bg: '#F5F6FA',
  white: '#FFFFFF',
  primary: '#635BFF',
  green: '#27AE60',
  orange: '#F2994A',
  red: '#EB5757',
  text: '#171717',
  textMid: '#4F4F4F',
  textLight: '#999999',
  textXLight: '#BDBDBD',
  border: '#F0F0F5',
};

const FONT = { xs: 12, sm: 11, base: 13, md: 14, lg: 16, xl: 18 };

const style = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { flex: 1, backgroundColor: COLORS.bg },
  scrollContent: { paddingHorizontal: 16, paddingTop: 8 },

  // ── Header ────────────────────────────────────────────────────────────────
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 4,
  },
  headerIcons: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  avatarWrapper: { width: 44, height: 44 },
  headerAvatar: { width: 44, height: 44, borderRadius: 22 },

  // ── Daily Summary ──────────────────────────────────────────────────────────
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#171717',
    letterSpacing: -0.7,
  },
  summaryRow: { flexDirection: 'row', gap: 8, marginBottom: 20 },
  summaryCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    height: 74,
    paddingTop: 4,
    paddingLeft: 8,
    borderWidth: 1,
  },
  summaryCardBlue: { borderColor: '#635BFF' },
  summaryCardAkashi: { borderColor: '#00BEB8' },
  summaryCardGreen: { borderColor: '#36C76C' },
  summaryLabel: {
    fontSize: FONT.xs,
    color: '#525252',
    fontWeight: '500',
    marginBottom: 4,
    lineHeight: 14,
  },
  summaryValue: {
    fontSize: FONT.xl,
    fontWeight: '800',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  summaryLink: {
    fontSize: FONT.xs,
    fontWeight: '600',
    marginLeft: 59,
    color: '#635BFF',
  },

  // ── Section Card ───────────────────────────────────────────────────────────
  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 18,
    paddingBottom: 8,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  Appoint: {
    backgroundColor: '#635BFF1F',
    borderRadius: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionIcon: { fontSize: 18 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    letterSpacing: -0.4,
  },
  sectionDate: { fontSize: 14, color: '#525252', fontWeight: '500' },

  // ── Filter Tabs ────────────────────────────────────────────────────────────
  tabBar: { paddingHorizontal: 16, gap: 8, marginBottom: 14 },
  tab: {
    paddingHorizontal: 14,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  tabInner: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  tabText: { fontSize: 12, fontWeight: '600', color: '#737373' },
  tabCountPill: {
    borderRadius: 10,
    minWidth: 18,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabCountText: { fontSize: 10, fontWeight: '700' },

  // ── Empty State ────────────────────────────────────────────────────────────
  emptyState: { paddingVertical: 32, alignItems: 'center' },
  emptyStateText: {
    color: COLORS.textXLight,
    fontSize: FONT.base,
    fontWeight: '500',
  },

  // ── Row Card ───────────────────────────────────────────────────────────────
  rowContainer: {
    marginHorizontal: 12,
    marginBottom: 10,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    elevation: 2,
    shadowColor: '#0000000D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  rowContainerExpanded: { borderColor: '#EDEDED', elevation: 4 },
  rowHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    gap: 14,
  },
  rowAvatar: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: COLORS.border,
  },
  rowInfo: { flex: 1, gap: 5 },
  rowTopLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowName: { fontSize: 16, fontWeight: '700', color: COLORS.text, flex: 1 },
  Service: { flexDirection: 'row', alignItems: 'center' },
  rowService: {
    fontSize: 12,
    color: COLORS.primary,
    fontWeight: '600',
    flex: 1,
  },
  rowTime: { fontSize: 11, color: COLORS.textLight, fontWeight: '400' },
  chevronWrap: { paddingLeft: 4 },

  // ── Status Badge ──────────────────────────────────────────────────────────
  badge: { paddingHorizontal: 16, paddingVertical: 2, borderRadius: 4 },
  badgeText: { fontSize: 10, fontWeight: '700', letterSpacing: 0.1 },

  // ── Appointment Expanded Panel ─────────────────────────────────────────────
  expandedPanel: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 12,
  },
  bookingOrderTitle: {
    fontSize: 14.8,
    fontWeight: '700',
    color: '#29343D',
    marginBottom: 14,
    textAlign: 'center',
  },
  stepsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    position: 'relative',
    columnGap: 7.4,
  },
  stepConnector: {
    position: 'absolute',
    top: 11,
    left: '16%',
    right: '16%',
    height: 1,
    backgroundColor: '#C8D0D6',
    zIndex: 0,
  },
  stepItem: { flex: 1, alignItems: 'center', zIndex: 1 },

  // ── Action Buttons (shared by both Appointment & Payment) ─────────────────
  actionRow: { flexDirection: 'row', gap: 10 },
  printBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
  },
  printBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#635BFF',
    fontFamily: 'Manrope',
  },
  detailsBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
  },
  detailsBtnText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#F0EFFF',
    fontFamily: 'Manrope',
  },

  // ── Delete Button (Payment — Expired / Started) ────────────────────────────
  deleteBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#635BFF',
    backgroundColor: COLORS.white,
  },
  deleteBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#635BFF',
    fontFamily: 'Manrope',
  },

  // ── Hint Row (Print first to confirm) ─────────────────────────────────────
  hintRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 10,
  },
  hintText: {
    fontSize: 10,
    color: '#9E9E9E',
  },

  // ── See All ────────────────────────────────────────────────────────────────
  seeAllText: {
    textAlign: 'center',
    color: '#635BFF',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 16,
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ── PAYMENT EXPANDED PANEL ────────────────────────────────────────────────

  payExpandedPanel: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },

  // ── Payment Steps ──────────────────────────────────────────────────────────
  payStepsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    position: 'relative',
  },
  payConnector: {
    position: 'absolute',
    top: 13,
    height: 1.5,
    backgroundColor: '#C8D0D6',
    zIndex: 0,
  },
  payConnectorLeft: {
    left: '22%',
    right: '55%',
  },
  payConnectorRight: {
    left: '55%',
    right: '22%',
  },
  payStepItem: {
    flex: 1,
    alignItems: 'center',
    zIndex: 1,
    gap: 6,
  },
  payCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payLabelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  payLabelText: { fontSize: 10, fontWeight: '700' },
  payStepDate: {
    fontSize: 10,
    color: '#9E9E9E',
    fontWeight: '400',
    textAlign: 'center',
  },

  // ── Divider ────────────────────────────────────────────────────────────────
  payDivider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginBottom: 16,
  },

  // ── Details Grid ───────────────────────────────────────────────────────────
  payDetailsRow: {
    flexDirection: 'row',
    marginBottom: 14,
    gap: 8,
  },
  payDetailCol: { flex: 1, gap: 3 },
  payDetailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#999999',
    letterSpacing: 0.6,
    marginBottom: 2,
  },
  payDetailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171717',
  },
  payAmountText: {
    color: '#171717',
    fontSize: 14,
    fontWeight: '700',
  },

  // ── Payment Method ─────────────────────────────────────────────────────────
  payMethodSection: { marginBottom: 14, gap: 6 },
  payMethodRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  payVisaBadge: {
    backgroundColor: '#F0EFFF',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 3,
  },
  payVisaText: {
    color: '#635BFF',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Manrope',
  },

  // ── Notes ──────────────────────────────────────────────────────────────────
  payNotesBox: {
    backgroundColor: '#F8F8FB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    gap: 6,
  },
  payNotesText: {
    fontSize: 12,
    color: '#525252',
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: 'Manrope',
  },

  // ── Inline-style replacements (ESLint fixes) ───────────────────────────────

  // FIX 3 – PayStepIcon empty circle (was: inline { width,height,borderRadius,borderWidth })
  // borderColor is still passed dynamically via style array since it depends on `color`
  payStepCircleEmpty: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
  },

  // FIX 4 – step label text base; color stays dynamic via style array
  payLabelTextBase: {
    // intentionally empty — keeps the style array pattern consistent
  },

  // FIX 5 – disabled "Confirm" button (was: inline { backgroundColor: '#BDBDBD' })
  detailsBtnDisabled: {
    backgroundColor: '#BDBDBD',
  },

  // FIX 6 & 7 – email / phone small text (was: inline { fontSize: 12 } on both)
  payDetailValueSm: {
    fontSize: 12,
  },
});

export default style;
