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
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },

  // ── Logo ──────────────────────────────────────────────────────────────────

  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    left: 161.5,
  },

  // ── Header ────────────────────────────────────────────────────────────────
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#141414',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
    fontFamily: 'Manpore',
  },
  subtitle: {
    fontSize: 14,
    color: '#171717',
    textAlign: 'center',
    marginBottom: 16,
  },

  // ── Inputs ────────────────────────────────────────────────────────────────
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171717',
    marginBottom: 8,
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

  input: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A2E',
    padding: 0,
  },
  eyeButton: {
    paddingLeft: 8,
  },

  // ── Forgot Password -
  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 28,
    marginTop: -8,
  },
  forgotText: {
    fontSize: 12,
    color: '#095654',
    fontWeight: '700',
  },

  // ── Login Button -
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
    marginBottom: 28,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // ── Divider-
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#8C8C8C',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#8C8C8C',
  },

  // ── Social Buttons -
  socialContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 36,
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
  },

  // ── Sign Up ───────────────────────────────────────────────────────────────
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 12,
    color: '#595959',
  },
  signUpLink: {
    fontSize: 12,
    color: '#635BFF',
  },
});

export default style;
