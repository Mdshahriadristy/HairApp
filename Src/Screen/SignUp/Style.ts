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
    color: '#171717',
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
    fontFamily: 'Manpore',
  },

  // ── Inputs ────────────────────────────────────────────────────────────────
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171717',
    marginBottom: 8,
    fontFamily: 'Manpore',
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
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default style;
