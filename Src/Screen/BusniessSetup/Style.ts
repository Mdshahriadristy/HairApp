import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
  },

  // ── Header ──
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#635BFF',
    textAlign: 'center',
    fontFamily: 'Manrope',
    marginBottom: 12,
  },

  // ── Progress Bar ──
  progressRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 4,
    borderRadius: 33554400,
  },
  progressBarActive: {
    backgroundColor: '#635BFF',
  },
  progressBarInactive: {
    backgroundColor: '#E5E5EC',
  },
  stepLabel: {
    fontSize: 12,
    color: '#635BFF',
    textAlign: 'center',
    fontFamily: 'Manrope',
    marginBottom: 20,
  },

  // ── Title ──
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#141414',
    textAlign: 'center',
    fontFamily: 'Manrope',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#141414',
    textAlign: 'center',
    fontFamily: 'Manrope',
    lineHeight: 20,
    marginBottom: 24,
    paddingHorizontal: 8,
  },

  // ── Profile Photo ──
  photoWrapper: {
    alignItems: 'center',
    marginBottom: 24,
  },
  photoCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    overflow: 'hidden',
  },
  photoImage: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
  photoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 44,
  },

  // ── Section Title ──
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#635BFF',
    fontFamily: 'Manrope',
    marginBottom: 16,
  },

  // ── Input ──
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#171717',
    fontFamily: 'Manrope',
    marginBottom: 6,
    gap: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E5E5EC',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 46,
    backgroundColor: '#FFFFFF',
    marginBottom: 4,
    gap: 4,
  },
  inputDisabled: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E5E5EC',
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#171717',
    fontFamily: 'Manrope',
    paddingVertical: 0,
  },
  textInputDisabled: {
    color: '#888888',
  },
  helperText: {
    fontSize: 11,
    color: '#888888',
    fontFamily: 'Manrope',
    marginBottom: 6,
    marginLeft: 2,
  },

  // ── Buttons ──
  buttonRow: {
    flexDirection: 'row',
    marginTop:16,
    gap: 16,
  },
  backButton: {
    flex: 1,
    height: 46,
    borderWidth: 1.5,
    borderColor: '#635BFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#635BFF',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Manrope',
  },
  continueButton: {
    flex: 1,
    height: 46,
    backgroundColor: '#635BFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5B5EFF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Manrope',
  },
  Vatid: {
    flexDirection: 'row',
  },
  Starcolor: {
    color: '#f70909',
  },
countrycode: {
  flex:1,
  flexDirection: 'row',
  gap: 16,
  marginBottom: 4,

},

inputWrapper1:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E5E5EC',
    borderRadius: 10,
    paddingHorizontal: 12,
    width:224,
    height: 46,
    backgroundColor: '#FFFFFF',
    marginBottom: 4,
    gap: 4,

},
inputWrapper2:{

      flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E5E5EC',
    borderRadius: 10,
    paddingHorizontal: 12,
    width:140,
    height: 46,
    backgroundColor: '#FFFFFF',
    marginBottom: 4,
    gap: 4,
  

},

});

export default style;
