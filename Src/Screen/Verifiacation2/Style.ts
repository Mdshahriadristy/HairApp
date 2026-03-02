import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 226,
    paddingBottom: 32,
  },

  // ── Logo ──
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    left: 161.5,
  },

  // ── Header ──
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#171717',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    fontFamily: 'Manrope',
  },
  subtitle: {
    fontSize: 14,
    color: '#171717',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Manrope',
    lineHeight: 20,
  },

  // ── Input Group ──
  inputGroup: {
    marginBottom: 24,
  },

  // ── OTP Label Row (label + reset button side by side) ──
  otpLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171717',
    fontFamily: 'Manrope',
  },

  // ── Reset Button ──
  resetButton: {
    backgroundColor: '#F0EFFF',
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  resetButtonText: {
    color: '#635BFF',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'Manrope',
  },

  // ── OTP Boxes ──
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 20,
  },
  otpBox: {
    flex: 1,
    height: 52,
    borderWidth: 1.5,
    borderColor: '#E5E5EC',
    borderRadius: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#171717',
    backgroundColor: '#FFFFFF',
  },
  otpBoxFilled: {
    borderColor: '#525252',
  },

  // ── Resend Section ──
  resendLabel: {
    textAlign: 'center',
    fontSize: 13,
    color: '#888888',
    marginBottom: 8,
    fontFamily: 'Manrope',
  },
  resendButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEBFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 6,
  },
  resendButtonActive: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#635BFF',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 6,
  },
  resendIcon: {
    fontSize: 14,
    color: '#635BFF',
  },
  resendText: {
    fontSize: 13,
    color: '#635BFF',
    fontWeight: '600',
    fontFamily: 'Manrope',
  },
  resendTextActive: {
    color: '#FFFFFF',
  },

  // ── Continue Button ──
  loginButton: {
    backgroundColor: '#635BFF',
    borderRadius: 8,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5B5EFF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  loginButtonDisabled: {
    backgroundColor: '#C4C2FF',
    shadowOpacity: 0,
    elevation: 0,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Manrope',
    letterSpacing: 0.2,
  },

  // ── Need Help Button ──
  loginButton1: {
    marginTop: 12,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#635BFF',
    borderRadius: 8,
    paddingVertical: 10,
  },
  loginButtonText1: {
    color: '#635BFF',
    fontSize: 16,
    fontWeight: '800',
    fontFamily: 'Manrope',
    letterSpacing: 0.2,
  },
});

export default style;
