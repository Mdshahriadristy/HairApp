 import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 98,
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
    lineHeight: 22,
  },

  //  Inputs 
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171717',
    marginBottom: 8,
    fontFamily: 'Manrope',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5EC',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 50,
    gap: 8,
  },
  inputWrapperError: {
    borderColor: '#D4D4D4',
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A2E',
    padding: 0,
  },
  eyeButton: {
    paddingLeft: 8,
  },

  //  Feedback Row (Strength OR Error — same spot)
  feedbackRow: {
    height: 24,
    justifyContent: 'center',
    marginBottom: 16,
  },
  strengthRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  strengthLabel: {
    fontSize: 13,
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
  },

  // ── Reset Button ──
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
    marginTop: 8,
  },
  loginButtonDisabled: {
    opacity: 0.5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default style;