import { StyleSheet, } from 'react-native';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,

  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 46,
    paddingBottom: 110.5,

  },

  // ── Logo -
  logo: {
    width: 56,
    height: 56,
    alignSelf: 'center',
    marginBottom: 16,
    resizeMode: 'contain',
  },

  // ── Header ────
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#171717',
    textAlign: 'center',
    marginBottom: 6,
    fontFamily: 'Manrope',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#171717',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'Manrope',
  },

  // ── Inputs ───
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171717',
    marginBottom: 6,
    fontFamily: 'Manrope',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5EC',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 45,
    gap: 6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A2E',
    padding: 0,
    fontFamily: 'Manrope',
  },
  eyeButton: {
    padding: 4,
  },

  // ── Forgot Password ────────────────────────────────────────────────────────
  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 28,
    marginTop: -8,
  },
  forgotText: {
    fontSize: 12,
    color: '#095654',
    fontWeight: '700',
    fontFamily: 'Manrope',
  },

  // ── Feedback Row (Strength OR Error) ──────────────────────────────────────
  feedbackRow: {
    height: 22,
    justifyContent: 'center',
    marginBottom: 14,
  },
  strengthRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  strengthLabel: {
    fontSize: 14,
    color: '#595959',
    fontFamily: 'Manrope',
  },
  strengthValue: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Manrope',
  },
  errorText: {
    fontSize: 14,
    color: '#FF317D',
    fontFamily: 'Manrope',
    fontWeight: '500',

  },

  // ── Role / ProfileCard ─────────────────────────────────────────────────────
  inputWrapper1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E4E6EB',
    borderWidth: 1,
    borderColor: '#E5E5EC',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
    gap: 6,
  },

  // ── Terms & Conditions Checkbox ────────────────────────────────────────────
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 20,
    gap: 6,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#635BFF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    flexShrink: 0,
  },
  checkboxChecked: {
    backgroundColor: '#635BFF',
    borderColor: '#635BFF',
    
  },
  checkmark: {
    color: '#FFFFFF',
    height:5.5,
    width:8,

  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: '#171717',
    fontFamily: 'Manrope',
    lineHeight: 18,
  },
  termsLink: {
    fontSize: 12,
    color: '#635BFF',
    fontWeight: '600',
    fontFamily: 'Manrope',
  },

  // ── Continue Button ────────────────────────────────────────────────────────
  loginButton: {
    backgroundColor: '#635BFF',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#635BFF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    fontFamily: 'Manrope',
  },

  // ── Divider ────────────────────────────────────────────────────────────────
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#8C8C8C',
    fontFamily: 'Manrope',
  },

  // ── Social Buttons ─────────────────────────────────────────────────────────
  socialContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5EC',
    borderRadius: 10,
    height: 50,
    gap: 8,
    shadowColor: '#141414',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#141414',
    fontFamily: 'Manrope',
  },

  // ── Sign In ────────────────────────────────────────────────────────────────
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 12,
    color: '#595959',
    fontFamily: 'Manrope',
  },
  signUpLink: {
    fontSize: 12,
    color: '#635BFF',
    fontWeight: '600',
    fontFamily: 'Manrope',
  },
  
});

export default style;