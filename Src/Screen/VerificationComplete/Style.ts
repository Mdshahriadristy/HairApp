import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 252,
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
    fontSize: 20,
    fontWeight: '600',
    color: '#73D990',
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

  Verification: {
    flexDirection: 'row',
    height: 36,
    width: 163,
    backgroundColor: '#ECFFF1',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    left: 106,
    marginTop: 16,
    marginBottom: 24,
  },

  Vtext: {
    color: '#73D990',
    textAlign: 'center',
  },
});

export default style;
